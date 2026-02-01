import React from 'react'
import { createContext, useState } from 'react'
import all_products from '../assets/all_products';

export const Shop = createContext(null);




const getDefaultCart = ()=>{

    let cart ={};
    for (let index = 0; index < all_products.length; index++){
      cart[index] = 0;
    }
      return cart;
}

const ShopContext = (props) => {

  
  const [cartItems,setCartItems] = useState(getDefaultCart());
  

  //console.log(cartItems);

  const addToCart = (itemId)=>{

    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  }
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }

  const getTotalCartAmount = ()=> {

    let totalAmount =0;
    for (const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = all_products.find((product) =>
            product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];



        }
    }
    return totalAmount;
  }
  
    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
              totalItem += cartItems[item];
            }
        }

        return totalItem;
    }

    const contextValue = {
      all_products,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      getTotalCartItems
    };

  return (
        <Shop.Provider value={contextValue}>
            {props.children}
        </Shop.Provider>
  )
}

export default ShopContext;
 