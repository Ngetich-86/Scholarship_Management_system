import React from 'react'
import './Log.css'
import image5 from '../../assets/images/key.webp'
// import {useForm } from 'react-hook-form'
// import {yup} from 'yup'
// import {yupResolver} from '@hookform/resolvers/yup'


const Log = () => {
  return (
    
    <div className="log-container">
      <div className="log-img">
        <img src={image5}alt="door" />
      </div>
      <div className="log-form">
        <h1>Login</h1>


        {/* const {register, handleSubmit, formState: {errors}} = useForm({
          resolver: yupResolver(schema)


        }) */}





        <form action="">
          <div className="log-input">
            <p>Username</p>
            <input type="text" placeholder="Username" />
            <p>Password</p>
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>

            </div>
        </form>



        </div>

    </div>
  )
}

export default Log