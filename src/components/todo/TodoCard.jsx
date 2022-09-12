import React from "react";

function TodoCard({ todo }) {
  return (
    <>
      <div className="todo__card">
        <input className="checkbox" type={"checkbox"} />
        <div className="content-container">
          <div className="todo-content">{todo.content}</div>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
