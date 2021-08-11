import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const fetchDAta = async () => {
    const { data } = await axios.get(`https://api.quotable.io/random`);
    console.log(data);
    setData(data);
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${data.content} - ${data.author}`;
    window.open(twitterUrl, "_blank");
  };

  useEffect(() => {
    fetchDAta();
  }, []);

  return (
    <div className="App">
      <div className="box-centerside">
        <div className="text">
          <p>{data.content}</p>
        </div>
        <div className="author">
          <h5>{data.author}</h5>
          <div className="button-container">
            <button className="twitter-button" onClick={tweetQuote}>
              TWEET
            </button>
            <button onClick={fetchDAta}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
