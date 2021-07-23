import React from "react";

import "./Card.css";

function card() {
  return (
    <div className="card">
      <img
        src="https://cms.qz.com/wp-content/uploads/2018/07/meme-featured.jpg?quality=75&strip=all&w=410&h=215"
        alt="Meme"
      ></img>
      <h1>React Card</h1>
      <p>This is React Card</p>
    </div>
  );
}

export default card;
