import { useContext, useEffect } from "react";
import Header from "./components/layout/Header";
import LoginModal from "./components/layout/LoginModal";
import Todos from "./components/todo/Todos";
import TodoContext from "./context/todoContext";

function App() {
  const { userName, setUserName, showModal, setShowModal } =
    useContext(TodoContext);

  useEffect(() => {
    const storedName = localStorage.getItem("username");

    setUserName(storedName);
    setShowModal(!storedName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      {showModal && <LoginModal />}
      {!showModal && (
        <h2 className="welcome-text">{`Welcome ${userName}! here is your To Do List.`}</h2>
      )}
      {!showModal && <Todos />}
    </>
  );
}

export default App;
