import React from "react";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import Todos from "./Todos";

function TodoCard({ todo, todos, setTodos }) {
  const handleDelete = (e) => {
    fetch(`https://631ae431dc236c0b1ee6b313.mockapi.io/todos/${todo.id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos(todos.filter((item) => item.id !== todo.id));
      console.log("Deleted!");
    });
  };

  const handleUpdate = (e) => {};

  return (
    <>
      <div className="todo__card">
        <input className="checkbox" type={"checkbox"} />
        <div className="todo-content">{todo.content}</div>
        <div className="update__delete">
          <i className="update-button" onClick={handleUpdate}>
            <HiPencilAlt size={"30px"} style={{ marginBottom: "1.5rem" }} />
          </i>
          <div className="delete-button" onClick={handleDelete}>
            <HiOutlineTrash size={"30px"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
