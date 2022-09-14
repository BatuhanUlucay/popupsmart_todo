import React, { useState } from "react";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import Todos from "./Todos";

function TodoCard({ todo, todos, setTodos }) {
  const [contentMode, setContentMode] = useState("");
  const [inputMode, setInputMode] = useState("hidden");
  const [updatedContent, setUpdatedContent] = useState("");

  const handleDelete = (e) => {
    fetch(`https://631ae431dc236c0b1ee6b313.mockapi.io/todos/${todo.id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos(todos.filter((item) => item.id !== todo.id));
      console.log("Deleted!");
    });
  };

  const handleUpdate = (e) => {
    setInputMode("");
    setContentMode("hidden");
  };

  const handleSave = (e) => {
    e.preventDefault();
    const index = todos.findIndex((element) => element.id === todo.id);
    todos[index].content = updatedContent;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos[index]),
    };

    fetch(
      `https://631ae431dc236c0b1ee6b313.mockapi.io/todos/${todo.id}`,
      requestOptions
    ).then(() => {
      setTodos(todos);
      setInputMode("hidden");
      setContentMode("");
      console.log("Updated!");
    });
  };

  return (
    <>
      <div className="todo__card">
        <input className="checkbox" type={"checkbox"} />
        <div className={`todo-content ${contentMode}`}>{todo.content}</div>
        <div className={`todo-input ${inputMode}`}>
          <form onSubmit={handleSave}>
            <input
              defaultValue={todo.content}
              onChange={(event) => setUpdatedContent(event.target.value)}
              type="text"
            ></input>
            <button>Save</button>
          </form>
        </div>
        <div className="update__delete">
          <div className="update-button" onClick={handleUpdate}>
            <HiPencilAlt size={"30px"} />
          </div>
          <div className="delete-button" onClick={handleDelete}>
            <HiOutlineTrash size={"30px"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
