const db = require('../db');

class UserController {
  async createUser(req, res) {
    const { username } = req.body;
    const newUser = await db.query(
      'INSERT INTO Users (username) values ($1) RETURNING *',
      [username],
    );
    res.json(newUser.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM Users');
    res.json(users.rows);
  }

  async getUser(req, res) {
    const userId = req.params.userId;
    const user = await db.query('SELECT * FROM Users WHERE user_id = $1', [
      userId,
    ]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { userId, username } = req.body;
    const user = await db.query(
      'UPDATE users set username = $1 WHERE user_id = $2 RETURNING *',
      [username, userId],
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const userId = req.params.user_id;
    const user = await db.query('DELETE FROM Users WHERE user_id = $1', [
      userId,
    ]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
