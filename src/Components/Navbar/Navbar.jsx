import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext';
const Navbar = ({setShowLogin}) => {
    
  const {getTotalCartItems}=useContext(StoreContext)

        const[menu,setMenu]=useState("Home");
    return (
        <div className='navbar'>
         <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("Home")}  className={menu==='Home'?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==='Menu'?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==='Mobile-App'?"active":""}>Mobile-App</a>
                <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==='Contact-Us'?"active":""}>Contact-us</a>
            </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search icon" />
            <div className="navbar-search-icon">
               <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartItems()?"dot":""}>
                    <p>{getTotalCartItems()?getTotalCartItems():""}</p>
                </div>
            </div>
            <button onClick={()=>setShowLogin(true)}>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default Navbar