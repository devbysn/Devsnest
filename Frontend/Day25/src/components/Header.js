import React from "react";
import "../App.css";
import image from "../image.svg";

// This is a functional component
function Header() {
  return (
    <div>
      <img src={image} className="app-logo" alt="logo" />
      <h3 className="h3-text">Hii I'm Satya</h3>
      <h4 className="h4-text">Front end developer</h4>
    </div>
  );
}

export default Header;
