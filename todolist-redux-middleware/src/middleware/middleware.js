import { addTodo, delTodo } from "../actions/actionCreators";

export const handleAddTodo = (payload) => (disaptch) => {
  disaptch(addTodo(payload));
};
export const handleDelete = (payload) => (disaptch) => {
  disaptch(delTodo(payload));
};
