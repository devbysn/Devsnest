import React, { useState } from "react";
import useCounterHook from "./useCounterHook";

const Home = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  // Here is the count value we get from our custom hooks

  // useEffect(() => {
  //   setCount(textValue.trim() ? textValue.split(" ").length : 0);
  // }, [textAreaValue]);

  const textAreaCount = useCounterHook(textAreaValue);

  return (
    <div>
      <textarea
        style={{ width: "100%", height: 200 }}
        value={textAreaValue}
        onChange={(event) => setTextAreaValue(event.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setTextAreaValue("")}>Clear</button>
        <span>Word Count: {textAreaCount}</span>
      </div>
    </div>
  );
};

export default Home;
