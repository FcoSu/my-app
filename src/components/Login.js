/* eslint-disable no-undef */
import React, { useState } from "react";
import { auth } from "../firebaseconfig";
import {useHistory} from 'react-router-dom';

const Login = () => {

    const historial = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState(null);

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((r) => {
        historial.push('/')        
      })
      .catch((e) => {
        if (e.code == "auth/invalid-email") {
          setMsgError("Formato incorrecto")
        }
        if (e.code == "auth/weak-password") {
          setMsgError("La password debe tener 6 caracteres o mas")
        }
      });
  };

  const LoginUsuario = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((r) => {
        historial.push('/')
        
      })
      .catch((err) => {
        if (err.code == "auth/wrong-password") {
          setMsgError("Contraseña incorrecta");
        }
        if (err.code == "auth/user-not-found") {
          setMsgError("Correo invalido");
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Introduce el Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control mt-4"
            type="password"
            placeholder="Introduce la password"
          />
          <input
            className="btn btn-dark btn-block mt-4"
            value="Registrar Usuario"
            type="submit"
          />
        </form>
        <button onClick={LoginUsuario} className="btn btn-success btn-block">
          Iniciar sesion
        </button>
        {msgError != null ? <div>{msgError}</div> : <span></span>}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
