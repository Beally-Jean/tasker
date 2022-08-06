const Router = require('express')
const router = new Router()

//импорт контроллеров
const workspaceContoller = require('../controllers/workspaceController')
const taskController = require('../controllers/taskController')
const statusContoller = require('../controllers/statusController')

//get-запросы
router.get('/:workspace_id', workspaceContoller.getWorkspaceById)
router.get('/:workspace_id/get_tasks', taskController.getTasksInWorkspace)
router.get('/:workspace_id/get_statuses', statusContoller.getStatusesInWorkspace)

//post-запросы на создание
router.post('/:workspace_id/create_task', taskController.createTask)
router.post('/:workspace_id/create_status', statusContoller.createStatus)

//post-запросы на удаление
router.post('/:workspace_id/delete_status', statusContoller.deleteStatus)
router.post('/:workspace_id/delete_task', taskController.deleteTask)


module.exports = router