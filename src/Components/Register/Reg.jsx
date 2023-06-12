import React from 'react'
import './Reg.css'
const Reg = () => {
  return (
    <>
    {/* <h3>Register now</h3> */}
    <div className="reg-container">
      <div className="reg-form">
      <form action="">
        <h2>Register Now!!</h2>
        {/* profile avatar image */}
        <p>Fill in the form below and one of our advisers will contact you soon.</p>
        <input type="text" placeholder='First Name'required />
        <input type="text" placeholder='Last Name'required  />
        <input type="text" placeholder='gender'required  />
        <input type="text" placeholder='email'required  />
        <input type="text" placeholder='Country of Residence'required  />
        <input type="text" placeholder='Phone Number'required  />
        <input type="text" placeholder='Current Education Level'required  />
        <button>Register</button>
      </form>
      </div>

      </div>

      


    </>




  )
}

export default Reg