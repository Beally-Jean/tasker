const {WorkSpace, User, UserWorkspaceLinks} = require('../models/models')

class WorkspaceController {

    async getWorkspaces(req, res) {
        try{
            const user_id = req.query.user_id
            if (!user_id) {
                throw Error("no have user_id")
            }

            const workspaces = await WorkSpace.findAll({
                include: [{
                    model: User,
                    through: {
                        where: {
                            id: userId
                        }
                    }
                }]
            })

            return res.json(workspaces)
        } catch(e) {
            return res.json({workspaces: []})
        }
    }

    async createWorkspace(req, res) {
        try {
            const nameWorkspace = req.body.name
            const userId = req.body.users.user_id

            if (!userId) {
                throw Error("no have user_id")
            }
            const workspace = await WorkSpace.create({name: nameWorkspace})
            UserWorkspaceLinks.create({userId, workspaceId: workspace.id})

            return res.json({workspaceId: workspace.id})
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async getWorkspaceById(req, res) {
        try{
            const {workspace_id} = req.params
            if (!workspace_id) {
                throw Error("no have workspace_id")
            }
            const workspace = await WorkSpace.findOne({where: {id: workspace_id}})
            return res.json(workspace)

        } catch(e) {
            return res.json(null)
        }
    }

    async deleteWorkspace(req, res) {
        try{
            const {workspaceId} = req.params
            if (!workspaceId) {
                throw Error("no have workspaceId")
            }
            const count = await WorkSpace.destroy({where: {id: workspaceId}})
            if (count === 0) {
                throw Error("some error message")
            }
            return res.json({success: true})

        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
}

module.exports = new WorkspaceController()