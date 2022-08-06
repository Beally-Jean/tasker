const Router = require('express')
const workspaceController = require('../controllers/workspaceController')
const router = new Router()

router.post('/create_workspace', workspaceController.deleteWorkspace)

module.exports = router