const {WorkSpace, User, UserWorkspaceLinks, TaskStatus} = require('../models/models')

class WorkspaceController {

    async getWorkspaces(req, res) {
        try{
            const { user_id } = req.query

            const workspacesRes = await WorkSpace.findAll({
                include: [{
                    model: User,
                    through: {
                        where: {
                            id: user_id
                        }
                    }
                }]
            })

            let workspaces = []
            await workspacesRes.forEach((workspace) => {
                workspaces.push({id: workspace.id, name: workspace.name})
            })

            return res.json({workspaces})
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async createWorkspace(req, res) {
        try {
            const nameWorkspace = req.body.name
            const users = req.body.users

            const workspace = await WorkSpace.create({name: nameWorkspace})
            await users.forEach((user_id) => {
                UserWorkspaceLinks.create({
                    workspaceId: workspace.id,
                    userId: user_id
                })
            })

            TaskStatus.create({
                name: "No status",
                order: 0,
                workspace_id: workspace.id
            })
            TaskStatus.create({
                name: "In progress",
                order: 5,
                workspace_id: workspace.id
            })
            TaskStatus.create({
                name: "Done",
                order: 10,
                workspace_id: workspace.id
            })

            return res.json({workspaceId: workspace.id})
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async getWorkspaceById(req, res) {
        try{
            const {workspace_id} = req.params

            const workspace = await WorkSpace.findOne({where: {id: workspace_id}})
            return res.json(workspace)

        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async deleteWorkspace(req, res) {
        try{
            const {workspaceId} = req.body
            const count = await WorkSpace.destroy({where: {id: workspaceId}})
            if (count === 0) {
                throw Error("record not delete")
            }
            return res.json({success: true})

        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
}

module.exports = new WorkspaceController()