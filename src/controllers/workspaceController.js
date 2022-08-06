const ApiError = require('../error/ApiError')


class WorkspaceController {

    async getWorkspaces(req, res) {
        return res.json("Get All Workspaces of User")
    }

    async createWorkspace(req, res) {

    }

    async getWorkspaceById(req, res) {

    }

    async deleteWorkspace(req, res) {
        
    }
}

module.exports = new WorkspaceController()