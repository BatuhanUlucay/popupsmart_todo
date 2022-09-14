import React, { useState } from "react";

function CreateTodo({ todos, setTodos }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastId = todos.slice(-1).pop().id;

    const newTodo = {
      id: +lastId + 1,
      content: content,
      isCompleted: false,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    };

    fetch(
      `https://631ae431dc236c0b1ee6b313.mockapi.io/todos`,
      requestOptions
    ).then(() => {
      setTodos([...todos, newTodo]);
      setContent("");
      console.log("Created!");
    });
  };

  return (
    <div className="create-todo-container">
      <div className="create-todo">
        <div className="todo__card">
          <h3 className="what-to-do">What to do now?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
