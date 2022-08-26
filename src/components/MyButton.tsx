import React, { useEffect, useState } from "react";

export const MyButton = (): JSX.Element => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(count);
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
