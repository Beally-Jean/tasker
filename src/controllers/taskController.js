const {Task} = require('../models/models')

class TaskController {
    
    async getTasksInWorkspace(req, res) {
        try {
            const {workspace_id} = req.params
            
            const tasks = await Task.findAll({
                where: {
                    workspace_id
                }
            })
            return res.json(tasks)
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
    
    async getTaskById(req, res) {
        try {
            const { task_id } = req.params
            const task = await Task.findOne({where: {id: task_id}})
            return res.json(task)
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async createTask(req, res) {
        try {
            const {status, name, description, owner, responsible, workspace} = req.body
            const task = await Task.create({
                status_id: status,
                name,
                description,
                owner_id: owner,
                responsible_id: responsible,
                workspace_id: workspace
            })
            return res.json({taskId: task.id})
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }

    async deleteTask(req, res) {
        try {
            const {taskId} = req.body
            
            const count = await Task.destroy({where: {id: taskId}})
            if (count === 0) {
                throw Error("some error message")
            }
            return res.json({success: true})

        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
}

module.exports = new TaskController()