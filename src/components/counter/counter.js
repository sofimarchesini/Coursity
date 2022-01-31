
import {useState} from "react";
import { useContext } from 'react';
import { context } from '../context/cartContext'
import {Link} from 'react-router-dom';


const  Counter = (props) => {

  const { freshTotal} = useContext(context)
  let [counter,setCounter] = useState(1);

  function prodIncr(){
    setCounter(counter+1);
    props.onAdd(counter) ;
  }

  function prodDecr(){
      if(counter===1) return;
      else setCounter(counter-1);
      props.onAdd(counter) ;
    }


  return (
    <div >
      <button
        onClick={() => prodDecr()}
        className="btn btn-secondary btn-xl"
      >
        Decrement
      </button>
      <span>{counter}</span>
      <button
        onClick={() => prodIncr()}
        className="btn btn-danger btn-xl m-2"
      >
        Increment
      </button>
      <Link to= '/'><button  onClick={() => {props.onAdd(counter)}} className= "mt-4 button-add" ><p className="carrito-title">Add to Cart</p></button><br/></Link>

    </div>
    
  );
}

export default Counter;