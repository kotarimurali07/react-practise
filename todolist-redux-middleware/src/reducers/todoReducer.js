import initialState from "./todoInitialState";
import ACTION from "../actions/actionTypes";
console.log("reducer");
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO: {
      console.log("reducer.ACTION.ADD_TODO");
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isAddedTodo: true
      };
    }
    case ACTION.FILTER_TODO: {
      console.log("reducer.ACTION.FILTER_TODO");
      return {
        isFilterTodo: true
      };
    }
    case ACTION.DEL_TODO: {
      console.log("reducer.ACTION.DEL_TODO");
      let updatedTodos = state.todos.filter(
        (todo) => todo.index !== action.payload
      );
      return { ...state, todos: updatedTodos };
    }
    default:
      console.log("reducer.default");
      return {
        ...state
      };
  }
};
export default todoReducer;
