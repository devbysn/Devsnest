import React, { useState } from "react";

import "./Meme.css";

function Meme({ meme, setMeme }) {
  const [Form, setForm] = useState({
    template_id: meme.id,
    username: "snverma1409",
    password: "9ZrEsqt$RC5hRJi",
    boxes: [],
  });

  const generateMeme = (Form) => {
    let url = `https://api.imgflip.com/caption_image?template_id=${Form.template_id}&username=${Form.username}&password=${Form.password}`;
    console.log(url);

    Form.boxes.map((box, index) => {
      return (url += `&boxes[${index}][text]=${box.text}`);
    });
    console.log(url);

    const data = fetch(url)
      .then((res) => {
        console.log(res.json());
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="meme" key={meme.id}>
      <img src={meme.url} alt="meme" />
      {[...Array(meme.box_count)].map((el, index) => (
        <input
          type="text"
          placeholder={"Meme caption " + (index + 1)}
          key={index}
          onChange={(e) => {
            const newBox = Form.boxes;
            newBox[index] = { text: e.target.value };
            setForm({ ...Form, boxes: newBox });
          }}
        />
      ))}

      <div className="buttons">
        <button
          onClick={() => {
            generateMeme(Form);
          }}
        >
          Generate meme
        </button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
}

export default Meme;
