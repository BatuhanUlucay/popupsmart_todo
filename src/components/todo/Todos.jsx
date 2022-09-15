import React, { useState, useEffect } from "react";
import CreateTodo from "./CreateTodo";
import TodoCard from "./TodoCard";

const API_URL = "https://631ae431dc236c0b1ee6b313.mockapi.io/todos";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <div className="todo-container">
        {loaded &&
          todos.map((todo) => {
            console.log(todo);
            return (
              <TodoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
      </div>
    </>
  );
}

export default Todos;
