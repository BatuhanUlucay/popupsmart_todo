import React from "react";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

function TodoCard({ todo }) {
  return (
    <>
      <div className="todo__card">
        <input className="checkbox" type={"checkbox"} />
        <div className="todo-content">{todo.content}</div>
        <div className="update__delete">
          <HiPencilAlt size={"30px"} style={{marginBottom: "1.5rem"}}/>
          <HiOutlineTrash size={"30px"}/>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
