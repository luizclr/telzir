import React from "react";
import "../styles/components/header.scss";

import logo from "../assets/images/emoji.svg";

/**
 * Header component.
 *
 * @return {React.StatelessComponent} Component
 */
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1 className="title">
        Tel<span>z</span>ir
      </h1>
    </div>
  );
};

export default Header;
