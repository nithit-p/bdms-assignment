interface Todo {
  id: string;
  title: string;
  description: string;
}

type TodoCreate = Omit<Todo, "id">;

export { Todo, TodoCreate };
