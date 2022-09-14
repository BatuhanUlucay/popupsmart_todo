import { useState, useContext } from "react";
import TodoContext from "../../context/todoContext";

function LoginModal() {
  const { setUserName, setShowModal } = useContext(TodoContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(name);
    setShowModal(false);
    localStorage.setItem("username", name);
  };

  return (
    <>
      <div className="modal">
        <h1 className="login-text">What's your name?</h1>
        <div className="login-inputs">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="login-input"
              onChange={(event) => setName(event.target.value)}
            />
            <button type={"submit"}>Submit</button>
          </form>
        </div>
      </div>
      <div className="overlay hidden"></div>
    </>
  );
}

export default LoginModal;
