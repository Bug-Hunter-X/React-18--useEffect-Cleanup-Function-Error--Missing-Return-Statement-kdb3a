```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an error in React 18 and above if the return value is missing
    return () => {
      // Cleanup logic
    };
  }, []);

  return <div>Count: {count}</div>;
}
```