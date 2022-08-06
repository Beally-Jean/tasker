const Router = require('express')
const workspaceController = require('../controllers/workspaceController')
const router = new Router()

router.get('/', workspaceController.getWorkspaces)

module.exports = router