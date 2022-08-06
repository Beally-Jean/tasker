const { TaskStatus } = require('../models/models')

class StatusController {
    async getStatusesInWorkspace(req, res) {
        try {
            const { workspace_id } = req.params
            const statuses = await TaskStatus.findAll({
                where: {
                    workspace_id
                }
            })
            return res.json(statuses)
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
        

    }

    async getStatusById(req, res) {
        try {
            const { status_id } = req.params
            const status = await TaskStatus.findOne({where: {id: status_id}})
            return res.json(status)
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async createStatus(req, res) {
        try{
            const { workspace_id } = req.params
            const { name, order } = req.body

            const status = await TaskStatus.create({
                name,
                order,
                workspace_id
            })

            return res.json({statusId: status.id})

        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async deleteStatus(req, res) {
        try {
            const { statusId } = req.body

            const count = await TaskStatus.destroy({where: {id: statusId}})
            if (count === 0) {
                throw Error("some error message")
            }
            return res.json({success: true})

        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
}

module.exports = new StatusController()