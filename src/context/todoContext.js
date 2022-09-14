import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useState("light");

  localStorage.setItem("themePreference", theme);

  return (
    <TodoContext.Provider
      value={{
        showModal,
        userName,
        theme,
        setShowModal,
        setUserName,
        setTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
