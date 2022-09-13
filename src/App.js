import { useState, useContext } from "react";
import Header from "./components/layout/Header";
import LoginModal from "./components/layout/LoginModal";
import Todos from "./components/todo/Todos";
import TodoContext from "./context/todoContext";

function App() {
  const { userName, showModal } = useContext(TodoContext);

  return (
    <div className="App">
      <Header />
      {showModal && <LoginModal />}
      {!showModal && `Welcome ${userName}!`}
      {!showModal && <Todos />}
    </div>
  );
}

export default App;
