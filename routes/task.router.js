const Router = require('express');
const router = new Router();

const taskController = require('../controllers/task.controller');

router.post('/task', taskController.createTask);
router.put('/task/:user_id', taskController.updateTask);
router.delete('/task/:user_id', taskController.deleteTaks);
router.get('/task', taskController.getTasks);

module.exports = router;
