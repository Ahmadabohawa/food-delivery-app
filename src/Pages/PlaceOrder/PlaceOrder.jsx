// get the information of the user about address and details 
import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/storeContext'
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
const navigate =useNavigate();
  const { getTotalCartAmount ,checkout}  =useContext(StoreContext)
  const proceed = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Your payment processed!",
      text: `your bill is $${getTotalCartAmount()==0?0:getTotalCartAmount()+2}`,
      icon: "success"
    });
    checkout();
    
  }
  return (
    <form  className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' required/>
            <input type="text"  placeholder='Last Name' required/>
          </div>
        <input type="email" placeholder='Email address' required/>
                <input type="text" placeholder='Street' required/>
          <div className="multi-fields">
                  <input type="text" placeholder='City' required/>
                 <input type="text" placeholder='State' required/>
          </div> 
          <div className="multi-fields"> 
              <input type="text" placeholder='Zip code' required/>
              <input type="text"  placeholder='Country' required/>
          </div> 
              <input type="text"   placeholder='Number' required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
            <h2> Cart Total</h2>
            <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            </div>
            <button onClick={proceed}>
              PROCEED TO PAYMENT
            </button>
            
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder