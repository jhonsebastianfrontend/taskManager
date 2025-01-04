const router = require('express').Router()
const tasksController = require('../controller/tasksController')

router.get('/get', tasksController.getTasks)
router.post('/create', tasksController.createTask)
router.delete('/delete/:id', tasksController.deleteTask)
router.put('/edit/:id', tasksController.editTask)

module.exports = router