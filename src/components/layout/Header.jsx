import React from "react";
import logo from "../../assets/images/logo.png";
import github from "../../assets/images/githubLogo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="welcome-header">
        <h1>To Do</h1>
      </div>
      <div className="gh-container">
        <a
          href="https://github.com/BatuhanUlucay/popupsmart_todo"
          target="blank_"
          className="gh-logo-link"
        >
          <img src={github} alt="github" height={"50"} className="gh-logo"/>
        </a>
      </div>
    </div>
  );
}

export default Header;
