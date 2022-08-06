const Router = require('express')
const router = new Router()

const workspaceRouter = require('./workspaceRouter')
const getWorkspaces = require('./getWorkspacesRouter')
const createWorkspace = require('./createWorkspaceRouter')
const deleteWorkspace = require('./deleteWorkspaceRouter')
const userController = require('../controllers/userController')

router.use('/workspace', workspaceRouter)
router.use('/create_workspace', createWorkspace)
router.use('/get_workspaces', getWorkspaces)
router.use('/delete_workspace', deleteWorkspace)

router.post('/user', userController.register)

module.exports = router