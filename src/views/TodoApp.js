import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodo';
import SearchTodo from '../components/SearchTodo';

const TodoApp = () => {

  const { searchTodoArray, handleAddTodo, handleToggleTodo, handleDeleteTodo, handleUpdateTodo, handleSearchTodo } = useTodos();

  return (
    <div>
      <h1>Todo List</h1>
      <SearchTodo onSearchTodo={handleSearchTodo} />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList 
        searchTodoArray={searchTodoArray}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
