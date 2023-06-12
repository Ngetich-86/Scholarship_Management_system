import React from 'react'
import './Admin.css'
const Admin = () => {
  return (
    <>
    <div className="ad-container">
      <div className="ad-form">
      <h1>Admin</h1>
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
    
    </>
  )
}

export default Admin