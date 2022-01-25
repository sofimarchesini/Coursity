
import {useState} from "react";

function  Counter() {

  let [counter,setCounter] = useState(0);
  return (
    //section
    <div >
      <button
        onClick={() => setCounter(counter-1)}
        className="btn btn-secondary btn-xl"
      >
        Decrement
      </button>
      <span>{counter}</span>
      <button
        onClick={() => setCounter(counter+1)}
        className="btn btn-danger btn-xl m-2"
      >
        Increment
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn btn-danger btn-xl m-2"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
