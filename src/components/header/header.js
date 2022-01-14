import React from "react";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header__wrapper">
      <h1>Spacestagram</h1>
      <div className="header__wrapper__line"></div>
      <img
        className="header__wrapper__logo"
        src="/logo512.png"
        alt="Spacestagram Logo"
      />
    </div>
  );
};
