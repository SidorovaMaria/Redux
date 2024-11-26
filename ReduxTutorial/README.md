# What is REDUX?

Redux is a pattern and library for managing and updating global application state.

## Useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

## Sttae Management

````function Counter() {
  //State: a counter value
  const [countr, setCounter] = useState(0)

  //Actioon: code that causes an update to the state when smth happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  \\View: the UI definition
return(
  <div>
  Value:{counter}<button onClick = {increment}>Increment</button>
  </div>
)}```
````
