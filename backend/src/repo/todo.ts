import { Todo } from "../models/todo";

type TodoInput = Omit<Todo, "id">;

export class TodoRepository {
  private list: Todo[] = [];
  constructor() {
    this.list = [];
  }
  create(todo: TodoInput): Todo {
    const newTodo = { ...todo, id: String(this.list.length + 1) };
    this.list.push(newTodo);
    return newTodo;
  }
  getAll(): Todo[] {
    return this.list;
  }
  getById(id: string): Todo | undefined {
    return this.list.find((todo) => todo.id === id);
  }
  update(todo: Todo): Todo {
    const index = this.list.findIndex((t) => t.id === todo.id);
    this.list[index] = todo;
    return todo;
  }
  delete(id: string): void {
    this.list = this.list.filter((todo) => todo.id !== id);
  }
}
