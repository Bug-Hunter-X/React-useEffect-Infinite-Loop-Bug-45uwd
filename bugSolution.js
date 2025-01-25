```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now the effect runs only once after the initial render.
    console.log("Effect runs only once");
    // Perform any side effects here, such as API calls
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```