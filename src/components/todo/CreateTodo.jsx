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
      console.log("Created!");
    });
  };

  return (
    <div>
      What to do now?
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setContent(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateTodo;
