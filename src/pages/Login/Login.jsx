import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Interface from "../../components/Interface";
import LoginForm from "../../components/LoginForm";

// CSS
import "./Login.css";

const Login = ({ handleLoginAttempt, errorMessage }) => {

  return (
    <>
      <Interface>
        <div className="login-content">
          <h1 className="login-title">Faça seu Login</h1>

          <LoginForm
            handleLoginAttempt={handleLoginAttempt}
            errorMessage={errorMessage}
          />

          <Link
            to="/cadastrar"
            className="login-non-client"
            title="Faça seu cadastro"
          >
            Ainda não me cadastrei &gt;
          </Link>
        </div>
      </Interface>
    </>
  );
};

export default Login;
