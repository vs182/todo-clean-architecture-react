import { TodoRepository } from "../repositories/TodoRepository";

export class SearchTodo {
  constructor(todoRepository = new TodoRepository()) {
    this.todoRepository = todoRepository;
  }

  execute(title, todos) {
    return this.todoRepository.search(title, todos);
  }
}
