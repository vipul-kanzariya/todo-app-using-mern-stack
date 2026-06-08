const express =require('express');
const router = express.Router();
const todoController = require('../controller/todoController');
router.route('/')
.get(todoController.getAllTodos)
.post(todoController.createTodo);
router.route('/:id')
.get(todoController.getTodo)
.put(todoController.updateTodo)
.delete(todoController.deleteTodo);

router.route('/:id/toggle').patch(todoController.toggleComplete);

module.exports  =router;