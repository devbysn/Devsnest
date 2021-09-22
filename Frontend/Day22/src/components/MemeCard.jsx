import React from "react";

import "./MemeCard.css";
function MemeCard({ template, setMeme }) {
  return (
    <div className="card-main">
      <ul className="card">
        {template.map((item) => {
          return (
            <li
              className="item"
              onClick={() => {
                setMeme(item);
              }}
            >
              <img key={item.id} src={item.url} alt="meme" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MemeCard;
