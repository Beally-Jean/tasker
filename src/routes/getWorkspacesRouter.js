const Router = require('express')
const workspaceController = require('../controllers/workspaceController')
const router = new Router()

router.get('/get_workspaces', workspaceController.getWorkspaces)

module.exports = router