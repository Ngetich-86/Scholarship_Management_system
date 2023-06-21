import React from "react";
import "./Reg.css";
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function Register() {
  const {register,handleSubmit,formState: { errors },reset,} = useForm({ resolver: yupResolver(schema) });

  // const sendDataToServer = (data) => {
  //   console.log(data);
  //   reset();
  // }

  const onSubmit = (data) => {
    axios.post("http://localhost:8081/auth/register", data)
    .then((response) => {
      console.log(response);
      })
    .catch((error) => {
       console.log(error); });
    }

  return (
    <div className="registrationPage">
      <h2 className="registrationTitle">REGISTER NOW</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="myFormLogin">
        <>
          <input className="inputFieldLogin" type="text" placeholder="Your username"{...register("username")}/>
          <p>{errors.username?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="email" placeholder="Your email" {...register("email")}/>
          <p>{errors.email?.message}</p>
        </>
        <>
          <input className="inputFieldLogin"type="password" placeholder="Your password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="password" placeholder="Confirm your password" {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>
        </>
        <div className="toLogIn">
          <h4 className="noAccount">Already have an account?</h4>
        </div>
        <input type="submit" value="REGISTER" className="submitbtn" />
      </form>
    </div>
  );
}

export default Register;
