const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const taskRouter = require('./taskRouter')
const workspaceRouter = require('./workspaceRouter')
const getWorkspaces = require('./getWorkspacesRouter')

router.use('/user', userRouter)
router.use('/task', taskRouter)
router.use('/workspace', workspaceRouter)
router.use('/get_workspaces', getWorkspaces)

module.exports = router