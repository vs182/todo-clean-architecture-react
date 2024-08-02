import { ADD_TODO, SET_TODOS, DELETE_TODO, UPDATE_TODO } from '../actions/todoActions';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload.updatedTodo } : todo
        )
      };
    default:
      return state;
  }
};

