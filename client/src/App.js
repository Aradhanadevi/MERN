import React, {useState} from 'react'
import { Navbar } from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import {About} from './component/About'
import {Contact} from './component/Contact'
import { Login } from './component/Login'
import {Signup} from './component/Signup'
import Home from './component/Home'
import { Cart } from './component/Cart'
import {Profile} from './component/Profile';

const App = (props) => {
  const [addToCart, setAddToCart] = useState([]);
  
  const addToCartFunc = (items) => {
    const temp = [...addToCart, items];
    setAddToCart(temp);
    console.log("addToCart state:", addToCart);
  }
  return (
    <>
      <Routes>
        <Route path='/home' exact element={<><Navbar /><Home purchaseItem={addToCartFunc} />  </>} />
        <Route path='/about' exact element={<><Navbar /><About /></>} />
        <Route path='/contact' exact element={<><Navbar /><Contact /></>} />
        <Route path='/' exact element={<><Navbar /><Login /></>} />
        <Route path='/profile' exact element={<><Navbar /><Profile /></>} />
        <Route path="/cart" element={<><Navbar/><Cart  purchaseItem={addToCart}/> </>} />
        <Route path='/signup' exact element={<><Navbar /><Signup /></>} />
      </Routes>
   
    </>
  )
}

export default App
