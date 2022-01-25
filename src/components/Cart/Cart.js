import {React,Component} from 'react';
import "./Cart.css";
import CartItem from './CartItem';
import $ from 'jquery'; 
import items from '../CardItem/CardData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, fa } from '@fortawesome/free-solid-svg-icons';
//CREO MIS VARIABLES

const cartDOM = document.querySelector(".cart");
const cartbutton = document.querySelector(".cart-button");
const cartoverlay = document.querySelector(".cart-overlay") ;
const clearCartBtn = document.querySelector(".clear-cart");
const closecart = document.querySelector(".close-cart");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");

// INICIALIZO EL CARRITO Y ME FIJO SI YA EXISTE EN LOCAL STORAGE 
let cart = [];
const LScart = localStorage.getItem("cart");

if (LScart) {
    cart = JSON.parse(LScart);
    cart.map(producto => {
        addAndShowCart(producto);
    });
};


function saveOnStorage() {
    let storageItem = localStorage.setItem('cart', JSON.stringify(cart));
    return storageItem;
};


//-----------------------------------

// FUNCIONES DE CARRITO

function addCart(producto){
    const prod = cart.find(prod => prod.id === producto.id);
    if (prod) {
        prod.cantidad++;
        let amount = document.getElementById(`${prod.id}-cart`).getElementsByClassName("item-amount")[0];
        amount.innerHTML = prod.cantidad;
    } else { addAndShowCart(producto);};
}
function addAndShowCart(item) {
    const prod = cart.find(prod => prod.id === item.id);

    if (!prod) {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            cantidad: 1,
        });
    }

    const div = document.createElement("div");
    div.classList.add("CartItem");
    div.id = `${item.id}-cart`;
    cartContent.appendChild(div);
    if(cart.length==1) {showCart()};
    $(`#${item.id}-up`).on("click",()=> {prodIncr(item)});
    $(`#${item.id}-down`).on("click",()=>{prodDecr(item)});
    $(`#${item.id}-remove`).on("click",()=>{removeProd(item)});
    saveOnStorage();

}

function freshTotal(cart){
    let tempTotal=0;
    cart.map(item => {
         tempTotal += parseInt(item.price*item.cantidad);
    });
    cartTotal.innerText = tempTotal;
}

function clearTotal(){
    cartTotal.innerText = 0;
}


// BOTONES

function removeProd(prod){
    const element = document.getElementById(`${prod.id}-cart`);
    cartContent.removeChild(element);
    cart = cart.filter(producto => producto.id !== prod.id);
    saveOnStorage();
    freshTotal(cart);
}


function showCart(){
    const cartoverlay = document.querySelector(".cart-overlay");
    cartoverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}


function hideCart(){
    const cartbutton = document.querySelector(".cart-button");
    const cartoverlay = document.querySelector(".cart-overlay") ;
    cartoverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
}

function clearCart(){
    cart = [];
    cartContent.innerHTML = "";
    clearTotal();
    saveOnStorage();
}

function prodIncr(prod){
    const item = cart.find(producto => producto.id === prod.id);
    item.cantidad++;
    let amount = document.getElementById(`${item.id}-cart`).getElementsByClassName("item-amount")[0];
    amount.innerHTML = item.cantidad;
    saveOnStorage();
    freshTotal(cart);

}

function prodDecr(prod){
    const item = cart.find(producto => producto.id === prod.id);
    if(item.cantidad==1){
        removeProd(prod);
    }else{
        item.cantidad--;
        let amount = document.getElementById(`${item.id}-cart`).getElementsByClassName("item-amount")[0];
        amount.innerHTML = item.cantidad;
        saveOnStorage();
        freshTotal(cart);
    }
}


 

//for (const item of items) {
  //  productos.push(new CartItem(item.id,item.name,item.price,item.image,item.description))
//};

for ( let prod  of items){
    $(`#${prod.id}`).on("click",()=> {
        addCart(prod);
        freshTotal(cart);
        $(`#prod-${prod.id}`).slideUp("fast", ()=>{
            $(`#prod-${prod.id}`).fadeIn("fast");
        });
        saveOnStorage();
    });

}


class Cart extends Component{

    render(){
        return (
            <div className="cart-overlay ">
                <div className="cart">
                <span onClick={() => hideCart()} className="close-cart">
                    <i className="icon-close" ><FontAwesomeIcon icon="fa-solid fa-rectangle-xmark"/>close</i>
                </span>
                <h2>Cart</h2>
                <div className="cart-content"></div>
                <div className="cart-footer">
                    <h3>your total : $<span className="cart-total">0</span></h3>
                    <button onClick={() => clearCart()} className="clear-cart banner-btn">clear cart</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Cart;