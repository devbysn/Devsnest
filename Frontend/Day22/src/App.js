import React, { useState, useEffect } from "react";

import MemeCard from "./components/MemeCard";
import "./App.css";

import Meme from "./components/Meme";
function App() {
  const [template, setTemplate] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setTemplate(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <MemeCard template={template} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
      ;
    </div>
  );
}

export default App;
