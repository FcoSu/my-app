import React from "react";

const Login = () => {
  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className="form-group">
            <input
                className="form-control"
                type="text" 
                placeholder="Introduce el Email" />
            <input
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
