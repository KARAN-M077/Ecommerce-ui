import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import newlogo from '../assets/newlogo.png'
const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img  src={newlogo} alt='logo.png'/>
        <p>PrimePicks</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:"none", color:"orange"}}>shop</Link>{menu === "shop"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:"none",color:"orange"}}>Men</Link>{menu === "mens" ? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("womens")}}><Link to='womens' style={{textDecoration:"none",color:"orange"}}>Women</Link>{menu === "womens" ? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}><Link to='kids' style={{textDecoration:"none",color:"orange"}}>Kids</Link>{menu === "kids" ? <hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='cart-icon.png'/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
