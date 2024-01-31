const express = require('express');
const userRouter = require('./routes/user.router');
const taskRouter = require('./routes/task.router');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', taskRouter);

app.listen(PORT, () => console.log('Сервер запушен', PORT));
