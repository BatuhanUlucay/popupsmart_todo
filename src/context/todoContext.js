import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState("");

  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("themePreference") === "dark" ? "dark" : "light"
  );

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
