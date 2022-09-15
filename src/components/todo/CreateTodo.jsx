import React, { useState } from "react";

const API_URL = "https://631ae431dc236c0b1ee6b313.mockapi.io/todos";

function CreateTodo({ todos, setTodos }) {
  const [content, setContent] = useState("");
  const [warning, setWarning] = useState("hidden");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 3) return;

    const lastId = todos.slice(-1).pop()?.id || 0;

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

    fetch(`${API_URL}`, requestOptions).then(() => {
      setTodos([...todos, newTodo]);
      setContent("");
    });
  };

  return (
    <>
      <div className="create-todo-container">
        <div className="create-todo">
          <div className="todo-card">
            <h3 className="what-to-do">What to do now?</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => {
                  setContent(e.target.value);
                  e.target.value.length > 2
                    ? setWarning("hidden")
                    : setWarning("");
                }}
                value={content}
              ></input>
              <button type="submit">Add</button>
            </form>
          </div>
          <h6 className={`char-warning ${warning}`}>
            New todo must be at least 3 characters.
          </h6>
        </div>
      </div>
    </>
  );
}

export default CreateTodo;
