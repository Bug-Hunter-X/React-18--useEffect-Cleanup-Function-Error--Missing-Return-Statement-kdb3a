```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is the corrected version with an explicit return statement
    return () => {
      // Cleanup logic (if any)
      console.log('Cleanup function executed');
    };
  }, []);

  return <div>Count: {count}</div>;
}
```