import React, { useReducer } from "react";
import { reducers, initialState } from "./CounterWithUseReducer";


function Counter() {
  const [state2, dispatch] = useReducer(reducers, initialState);
  return (
    <>
      Count: {state2.count}
      <br />
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <br />
      Status: {state2.status}
    </>
  );
}

export default Counter;
