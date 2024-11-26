# What is REDUX?

Redux is a pattern and library for managing and updating global application state.

## Useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

## State Management

```javascript
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## Immutability

React and Redux expect that all state updates are done immutably. In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.

### Terminology

- **Action**
  An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.
_Typical action object_

```javascript
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

- **Action Creators**
  An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

_Example:_

```javascript
const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

- **Reducer**

  A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

  **Reducers rules:**

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make immutable updates, by copying the existing `state` and making changes to the copied values.
- They must be "pure" - they cannot do any asynchronous logic, calculate random values, or cause other "side effects"
  **LOGIC**

1. Check to see if the reducer cares about this action

- If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the exisitn gstate unchanged

**Example**

```javascript
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
```

- **Store**

The current Redux application state lives in an object called the store .

The store is created by passing in a reducer, and has a method called getState that returns the current state value:

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());
// {value: 0}
```

- **Dispatch**

The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it.

```javascript
store.dispatch({ type: "counter/increment" });

console.log(store.getState());
// {value: 1}

const increment = () => {
  return {
    type: "counter/increment",
  };
};

store.dispatch(increment());

console.log(store.getState());
// {value: 2}
```

- **Selectors**

Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data

````javascript
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2```
````
