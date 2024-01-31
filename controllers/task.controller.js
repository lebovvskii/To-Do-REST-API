const db = require('../db');

class TaskController {
  async createTask(req, res) {
    const { userId, taskDescription, status } = req.body;
    const newTask = await db.query(
      'INSERT INTO tasks (user_id, task_description, status) values ($1, $2, $3)',
      [userId, taskDescription, status],
    );
    res.json(newTask.rows[0]);
  }

  async getTasks(req, res) {
    const tasks = await db.query('SELECT * FROM Tasks');
    res.json(tasks.rows);
  }

  async updateTask(req, res) {
    const userId = req.params.user_id;
    const { taskDescription, status } = req.body;
    const updatedTask = await db.query(
      'UPDATE tasks set task_description = $1, status = $2 WHERE user_id = $3',
      [taskDescription, status, userId],
    );
  }

  async deleteTaks(req, res) {
    const userId = req.params.user_id;
    const task = await db.query('DELETE FROM Tasks WHERE user_id = $1', [
      userId,
    ]);
    res.json(task.rows[0]);
  }
}

module.exports = new TaskController();
