import React from 'react'
import './Log.css'
import image5 from '../../assets/images/key.webp'
const Log = () => {
  return (
    
    <div className="log-container">
      <div className="log-img">
        <img src={image5}alt="door" />
      </div>
      <div className="log-form">
        <h1>Login</h1>
        <form action="">
          <div className="log-input">
            <p>Username</p>
            <input type="text" placeholder="Username" />
            <p>Password</p>
            <input type="password" placeholder="Password" />
            <button>Login</button>

            </div>
        </form>
        </div>

    </div>
  )
}

export default Log