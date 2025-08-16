import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Effect", count);
    setCount(count + 1);
  }, []);

  console.log("Render", count);
  return <div>{count}</div>;
}

export default App;