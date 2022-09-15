import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import github from "../../assets/images/githubLogo.png";

function Header() {
  const [checked, setChecked] = useState(
    localStorage.getItem("themePreference") === "dark"
  );

  const handleToggle = (e) => {
    const currentTheme = localStorage.getItem("themePreference");
    localStorage.setItem(
      "themePreference",
      currentTheme === "light" ? "dark" : "light"
    );
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("themePreference") === "dark" ? "dark" : "light"
    );

    setChecked(!checked);
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="welcome-header">
        <h1>To Do</h1>
      </div>
      <div className="gh-container">
        <div className="theme-container">
          <input
            type="checkbox"
            id="toggle_checkbox"
            onChange={handleToggle}
            checked={checked}
          />

          <label htmlFor="toggle_checkbox">
            <div id="star">
              <div className="star" id="star-1">
                ★
              </div>
              <div className="star" id="star-2">
                ★
              </div>
            </div>
            <div id="moon"></div>
          </label>
        </div>
        <a
          href="https://github.com/BatuhanUlucay/popupsmart_todo"
          target="blank_"
          className="gh-logo-link"
        >
          <img src={github} alt="github" height={"50"} className="gh-logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
