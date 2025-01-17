# What is Redux Thunk?

- Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action.
- This is useful for handling asynchronous operations, such as fetching data from an API, within a Redux application.

**Youtube Link:** [https://youtu.be/FR8OuMMQVc4?si=OmKN5EipTMk3j-fv](https://youtu.be/FR8OuMMQVc4?si=OmKN5EipTMk3j-fv)

# Why Use Redux Thunk?

- Normally, action creators in Redux are expected to return plain action objects, which are then processed by reducers.
- However, this approach doesn't support asynchronous operations.
- Redux Thunk allows you to perform asynchronous logic (like API calls) before dispatching an action.

# How Redux Thunk Works:

- When you use Redux Thunk, your action creators can return a function that takes `dispatch` and `getState` as arguments which is passed by redux thunk.
- This function can perform any asynchronous operation, and once it's done, it can dispatch one or more actions.

# Basic Setup:

- **1: Install Redux Thunk**

```javascript
npm install redux-thunk
```

**2: Apply Middleware**

```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

# Example: Fetching Data with Redux Thunk:

**Step 1: Action Types**

- Define the action types for starting the fetch, success, and failure.

_actionTypes.js_

```javascript
// actionTypes.js
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
```

**Step 2: Action Creators**

- Create action creators to handle each state of the asynchronous operation.

  _actions.js_

```javascript
// actions.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
```

# Step 3: Reducer:

- Create a reducer to handle the actions dispatched by the thunk.

_reducer.js_

```javascript
// reducer.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
```

# Step 4: Combine Reducers and Create Store:

- Combine the reducers and create the Redux store with thunk middleware.

_store.js_

```javascript
// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

# Step 5: Connect Redux to React Component:

- Use the `useDispatch` and `useSelector` hooks from `react-redux` to connect your React component to the Redux store.

_App.js_

```javascript
// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {dataState.loading ? (
        <p>Loading...</p>
      ) : dataState.error ? (
        <p>Error: {dataState.error}</p>
      ) : (
        <ul>
          {dataState.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
```

# Summary:

- Redux Thunk allows you to handle asynchronous logic in your Redux application by writing action creators that return a function.
- This function can perform asynchronous operations and dispatch actions based on the results.
- This approach provides a flexible and powerful way to manage side effects and asynchronous operations in your Redux application.

# Doubts:

_Q1: how we can accesss dispatch() method here however we are not passing it while dispatching the fetchData() method_?

```javascript
// Thunk action creator
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
```

_Answer:_

- In Redux Thunk, when you return a function from an action creator, Redux Thunk middleware intercepts that function and calls it with two arguments: `dispatch` and `getState.`
- This allows you to access the `dispatch` function inside your action creator without having to pass it manually.
- Here's how it works step by step:

## 1: Middleware Setup:

- When you configure your Redux store with Redux Thunk middleware, it wraps your action creators and checks if they return a function.

## 2: Action Creator:

- If an action creator returns a function, Redux Thunk calls that function with `dispatch` and `getState.`

_Q2: from where this `state.data` is coming_

```javascript
// App.js
const dataState = useSelector((state) => state.data);
```

_Answer:_

- The state.data is coming from the state structure defined in your Redux store. Specifically, it is the part of the state that is managed by the reducer handling data-related actions.

- To understand this, let's break down how Redux state is structured and managed:

## 1. Reducer Definition:

- You define a reducer to handle actions related to fetching data. This reducer updates the state based on the dispatched actions.

```javascript
// dataReducer.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
```

## 2. Combine Reducers:

- You combine your reducers into a root reducer. This is where `state.data` is defined.

```javascript
// rootReducer.js
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import counter from "./counterReducer"; // example of another reducer

const rootReducer = combineReducers({
  data: dataReducer, // 'data' key here is what you'll use to access dataReducer's state
  counter, // another piece of state managed by counterReducer
});

export default rootReducer;
```

## 3. Store Configuration:

- You configure the Redux store with the root reducer.

```javascript
// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

## 4. Using useSelector:

- In your component, you use the `useSelector` hook to access the part of the state managed by `dataReducer`.

```javascript
// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data); // Accessing the state managed by dataReducer

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {dataState.loading ? (
        <p>Loading...</p>
      ) : dataState.error ? (
        <p>Error: {dataState.error}</p>
      ) : (
        <ul>
          {dataState.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
```

## Summary

- `dataReducer` manages the state related to data fetching.
- The root reducer combines `dataReducer` with other reducers, assigning it to the `data` key in the state.
- `useSelector((state) => state.data)` accesses the state managed by dataReducer.
- By following this structure, `state.data` in `useSelector` correctly points to the state managed by `dataReducer`.
