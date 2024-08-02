import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos, addTodo as addTodoAction, deleteTodo as deleteTodoAction, updateTodo as updateTodoAction } from '../store/actions/todoActions';
import { ApiService } from '../services/ApiService';
import { TodoService } from '../services/TodoService';

const useTodos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [ searchTodoArray, setSearchTodoArray ] = useState(todos)
  const dispatch = useDispatch();
  const todoService = new TodoService();

  useEffect(() => {
    ApiService.fetchTodos().then(fetchedTodos => {
      dispatch(setTodos(fetchedTodos));
    });
  }, [dispatch]);

  useEffect(() => {
    setSearchTodoArray(todos);
  }, [todos]);


  const handleAddTodo = (todo) => {
    todoService.add(todo);
    dispatch(addTodoAction(todo))
  };

  const handleDeleteTodo = (id) => {
    todoService.delete(id)
    dispatch(deleteTodoAction(id));
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    todoService.update(id, updatedTodo);
    dispatch(updateTodoAction(id, updatedTodo));
  };

  const handleToggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    handleUpdateTodo(id, { completed: !todo.completed });
  };

  const handleSearchTodo = (title) =>{
    const searchArray = todoService.search(title, todos);
    setSearchTodoArray(searchArray)
    
  }

  return {
    searchTodoArray,
    handleAddTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleToggleTodo,
    handleSearchTodo
  };
};

export default useTodos;
