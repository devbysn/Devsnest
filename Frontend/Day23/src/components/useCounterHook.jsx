import React, { useState, useEffect } from "react";

function useCounterHook(textValue) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(textValue.trim() ? textValue.split(" ").length : 0);
  }, [textValue]);

  return count;
}

export default useCounterHook;
