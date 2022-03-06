import React from 'react';
import './form.css';
import { useState } from "react";
import { useContext } from 'react';
import { context } from '../context/cartContext' 
import {getFirestore} from "../../firebase";

const Formulario = () => {
    const  {cart, clearCart , freshTotal} = useContext(context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSumbit = (e) =>  {
        e.preventDefault();

        if (!name || !email ) alert('Complete data');
        else {
            const newOrder = {
                buyer: {name, email},
                items: cart,
                total: freshTotal()
            }
            const db = getFirestore();
            let orders = db.collection("orders");
            console.log(newOrder)
            orders.add(newOrder).then((resolve)=>alert(`Su compra fue exitosa! ID de la compra: ${resolve.id}`));
            clearCart();
        }
    }

      return (
        <form id="contact" action="" method="post" onSubmit={handleSumbit}>
            <fieldset>
                 <input name="name" placeholder="Your name" type="text" tabindex="1" required autofocus onChange={(e) => setName(e.target.value)}/>
            </fieldset>
            <fieldset>
                <input name="email"  placeholder="Your Email Address" type="email" tabindex="2" required onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
            </fieldset>
            <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
        </form>
          
      );
    }
  
  
export default Formulario;      
  