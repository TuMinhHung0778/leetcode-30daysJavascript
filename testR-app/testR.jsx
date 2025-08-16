function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Effect", count);
    setCount(count + 1);
  }, []);

  console.log("Render", count);
  return <div>{count}</div>;
}
