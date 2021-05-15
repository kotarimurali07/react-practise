import ACTION from "./actionTypes";
console.log("ACTION_CREATORS");
export const addTodo = (payload) => {
  console.log("addTodo()");
  return {
    type: ACTION.ADD_TODO,
    payload
  };
};

export const delTodo = (payload) => {
  console.log("delTodo()");
  return {
    type: ACTION.DEL_TODO,
    payload
  };
};
export const filterTodo = (payload) => {
  console.log("filterTodo()");
  return {
    type: ACTION.FILTER_TODO,
    payload
  };
};
