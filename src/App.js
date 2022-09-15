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
      {showModal ? (
        <LoginModal />
      ) : (
        <>
          <h2 className="welcome-text">{`Welcome ${userName}! Here is your To Do list.`}</h2>
          <Todos />
        </>
      )}
    </>
  );
}

export default App;
