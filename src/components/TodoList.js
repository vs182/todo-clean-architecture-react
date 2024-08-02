import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onUpdate, searchTodoArray }) => {
  return (
    <ul>
      {
        searchTodoArray.length ? (
          searchTodoArray.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
        ))) : <h1>No Data</h1>
      }
    </ul>

  );
}

export default TodoList;
