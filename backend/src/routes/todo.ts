// create express group router

import express, { Request, Response } from "express";
import { Todo, TodoCreate } from "../models/todo";
import { TodoRepository } from "../repo/todo";
import Joi from "joi";

const router = express.Router();
const todoRepository = new TodoRepository();

const todoRequestValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});

// get all todos
router.get("/", async (req: Request<Todo>, res: Response<Todo[]>) => {
  const todos = todoRepository.getAll();
  res.json(todos);
});

// get todo by id
router.get("/:id", async (req: Request, res: Response) => {
  const todo = todoRepository.getById(req.params.id);
  res.json(todo);
});

// create todo

router.post("/", async (req: Request, res: Response) => {
  const { error } = todoRequestValidation.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  const todo: TodoCreate = {
    title: req.body.title,
    description: req.body.description,
  };
  const result = todoRepository.create(todo);
  res.json(result);
});

// update todo

router.put("/:id", async (req: Request<{ id: string }>, res: Response) => {
  const { error } = todoRequestValidation.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  const todo = todoRepository.getById(req.params.id);
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  todo.title = req.body.title;
  todo.description = req.body.description;
  const result = todoRepository.update(todo);
  res.json(result);
});

// delete todo
router.delete("/:id", async (req: Request, res: Response) => {
  todoRepository.delete(req.params.id);
  res.json({ message: "Todo deleted" });
});

export default router;
