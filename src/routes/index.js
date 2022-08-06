const Router = require('express')
const router = new Router()

const workspaceRouter = require('./workspaceRouter')
const getWorkspaces = require('./getWorkspacesRouter')
const createWorkspace = require('./createWorkspaceRouter')
const deleteWorkspace = require('./deleteWorkspaceRouter')

router.use('/workspace', workspaceRouter)
router.use('/create_workspace', createWorkspace)
router.use('/get_workspaces', getWorkspaces)
router.use('/delete_workspace', deleteWorkspace)

module.exports = router