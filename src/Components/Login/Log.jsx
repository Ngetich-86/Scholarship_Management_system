import React from "react";
import "./Log.css";
import axious from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  // const sendDataToServer = (data) => {
  //   console.log(data);
  //   reset();
  // };

  const onSubmit = (data) => {
    axios.post("http://localhost:8081/auth/register", data)
    .then((response) => {
      console.log(response);
      })
    .catch((error) => {
       console.log(error); });
    }


  return (
    <div className="loginPage">
      <h2 className="loginTitle">LOG-IN</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="myFormLogin">
        <>
          <input type="email" placeholder="Your email" {...register("email")} className="inputFieldLogin"/>
          <p>{errors.email?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="password" placeholder="Your password"{...register("password")}
          />
          <p>{errors.password?.message}</p>
        </>
        <div className="toLogIn">
          <h4 className="forgotPasword">Forgot Password</h4>
          <h4 className="noAccount">Don't have an account?</h4>
        </div>
        <input type="submit" value="LOG IN" className="submitbtn" />
      </form>
    </div>
  );
}

export default Login;
