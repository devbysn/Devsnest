import React from "react";
import CardElement from "./CardElement";
import "./Card.css";

function Card() {
  let j = [];
  let num = 72;
  for (var i = 0; i < num; i++) {
    j.push(<CardElement style={{ backgroundColor: "red" }} />);
  }
  {
    /* <div
      className="block"
      style={
        col % 2 === 0
          ? row % 2 === 0
            ? { background: "black" }
            : { background: "white" }
          : row % 2 === 0
          ? { background: "white" }
          : { background: "black" }
      }
    ></div> */
  }
  return <div className="card">{j}</div>;
}

export default Card;
