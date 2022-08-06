const Router = require('express')
const workspaceController = require('../controllers/workspaceController')
const router = new Router()

router.post('/', workspaceController.deleteWorkspace)

module.exports = router