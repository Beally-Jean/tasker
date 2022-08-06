const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const taskRouter = require('./taskRouter')
const workspaceRouter = require('./workspaceRouter')
const getWorkspaces = require('./getWorkspacesRouter')
const deleteWorkspace = require('./deleteWorkspaceRouter')

router.use('/user', userRouter)
router.use('/workspace', workspaceRouter)
router.use('/get_workspaces', getWorkspaces)
router.use('/delete_workspace', deleteWorkspace)

module.exports = router