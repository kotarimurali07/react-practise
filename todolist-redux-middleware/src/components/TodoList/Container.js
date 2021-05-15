import React, { useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { handleAddTodo, handleDelete } from "../../middleware/middleware";
const Container = (props) => {
  console.log("===============props======");
  const { _handleAddTodo, todos, _handleDelete } = props;
  const [input, setinput] = useState("");
  //const [todos, settodos] = useState([]);
  const handleInput = (e) => {
    setinput(e.target.value);
  };
  // const handleTodos = (e) => {
  //   settodos(e.target.value);
  // };
  const Addtodo = (e) => {
    // settodos([...todos, input]);
    let index = Math.floor(Math.random() * 1000);
    _handleAddTodo(input, ...todos,index);
    setinput("");
    e.preventDefault();
  
  };
  const DeleteTodo = (index) => {
    _handleDelete(index);
    //_handleAddTodo(...todos);
    // settodos(Tododata);
  };
  return (
    <div>
      <Presentation
        input={input}
        todos={todos}
        Addtodo={Addtodo}
        handleInput={handleInput}
        DeleteTodo={DeleteTodo}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};
const mapDisPatchToPRops = (dispatch) => {
  return {
    _handleAddTodo: (payload) => {
      dispatch(handleAddTodo(payload));
    },
    _handleDelete: (payload) => {
      dispatch(handleDelete(payload));
    }
  };
};
export default connect(mapStateToProps, mapDisPatchToPRops)(Container);
