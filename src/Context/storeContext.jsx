import React, { createContext, useEffect, useState } from 'react'
import { food_list } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    
    const [cartItems,setCartItems]=useState({});
    const navigate =useNavigate();

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1})) //=> key:itemId , quantity:1
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const checkout=()=>{
        setCartItems((prev)=>({...prev=0}))
        navigate("/")
    }
    // when the cartItems will be updated we'll log
  
    useEffect(()=>{
        console.log(cartItems) // => {2:4} => the item with id 2 we need 4 bars from it 
    },[cartItems])
    
    const getTotalCartAmount = ()=>{
        let totalAmount = 0 ;
        for(const item in cartItems){
            console.log("item : ",item)
            if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount+=itemInfo.price * cartItems[item];
            }
        }
        return totalAmount
    }
    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            totalItems+=cartItems[item]
        }
        return totalItems
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        checkout
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;