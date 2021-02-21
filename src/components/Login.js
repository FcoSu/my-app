/* eslint-disable no-undef */
import React, { useState } from "react";
import {auth} from '../firebaseconfig'



const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RegistrarUsuario = (e) => {
        e.preventDefault()
        try{
            auth.createUserWithEmailAndPassword(email, password)
            alert('Usuario registrado')
        }catch(e){
            console.log(e)
        }
    }




  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
            <input
            onChange={(e) => {setEmail(e.target.value)}}
                className="form-control"
                type="text" 
                placeholder="Introduce el Email" />
            <input
            onChange={(e) => {setPassword(e.target.value)}}
                className="form-control mt-4"
                type="password" 
                placeholder="Introduce la password" />
            <input
                className="btn btn-dark btn-block mt-4"
                value="Registrar Usuario"
                type="submit"/>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
