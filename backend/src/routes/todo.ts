// create express group router

import express, { Request, Response } from "express";
import { Todo } from "../models/todo";
import { TodoRepository } from "../repo/todo";

const router = express.Router();
const todoRepository = new TodoRepository();

type TodoRequest = Omit<Todo, "id">;

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
router.post("/", async (req: Request<TodoRequest>, res: Response) => {
  const todo = req.body;
  const result = todoRepository.create(todo);
  res.json(result);
});

// update todo

router.put("/:id", async (req: Request, res: Response) => {
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
