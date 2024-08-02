import React, { useState } from 'react';

const SearchTodo = ({ onSearchTodo }) => {
  const [title, setTitle] = useState('');

  const handleSearch = (e) => {
    setTitle(e.target.value);
    onSearchTodo(e.target.value);
  };

  return (
    <input 
        type="text" 
        value={title} 
        onChange={handleSearch} 
        placeholder="Add new todo"
    />
  );
};

export default SearchTodo;
