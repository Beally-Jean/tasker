const Router = require('express')
const router = new Router()

//импорт роутеров
const workspaceRouter = require('./workspaceRouter')
const getWorkspaces = require('./getWorkspacesRouter')
const createWorkspace = require('./createWorkspaceRouter')
const deleteWorkspace = require('./deleteWorkspaceRouter')
const userController = require('../controllers/userController')

//подключение роутеров
router.use('/workspace', workspaceRouter)
router.use('/create_workspace', createWorkspace)
router.use('/get_workspaces', getWorkspaces)
router.use('/delete_workspace', deleteWorkspace)

//регистрация пользователя
router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router