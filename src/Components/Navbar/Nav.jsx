import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
// import { FaUser, FaEnvelope } from "react-icons/fa";
// import { AiFillPhone} from "react-icons/ai";


function Nav() {
  return (
    <>
    <div className="nav-all">
    <div className="logo">
        <h1>Ustawi Foundation</h1>
      </div>
    <div className="navbar">
    
    <Link to='/ 'id ="menu">Home</Link>
    {/* <AiFillPhone className="contact__option-icon" aria-label="" /> */}
    <Link to='/About 'id ="menu">About us</Link>
    <Link to='/Reg 'id ="menu">Register</Link>
    {/* <FaUser size={20} color="red" className="my-icon" /> */}

    <Link to='/Log 'id ="menu" >Login</Link>
    <Link to='/Admin 'id ="menu">AdminLogin</Link>
    </div>

    </div>
    </>
  )
}

export default Nav