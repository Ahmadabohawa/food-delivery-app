// npm run dev
import { useState } from "react"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import {Routes,Route} from "react-router-dom"
import LoginPopup from "./Components/LoginPopup/LoginPopup"
function App() {

  const [showLogin,setShowLogin] =useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/order' element={<PlaceOrder/>}></Route>
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
