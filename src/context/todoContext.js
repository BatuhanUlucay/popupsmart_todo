import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState("");

  return (
    <TodoContext.Provider
      value={{
        showModal,
        userName,
        setShowModal,
        setUserName,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
