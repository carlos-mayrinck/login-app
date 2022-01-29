import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Interface from "../../components/Interface";
import LoginForm from "../../components/LoginForm";

// CSS
import "./Login.css";

const Login = () => {
  
  const [registeredUsers, setUser] = useState([
    {
      id: 1,
      nickname: 'Carlos',
      username: 'admin',
      password: '12345'
    },
  ]);

  const handleLoginAttempt = (userData) => {
    if(userData.username.length > 0 && userData.password.length > 0){
      registeredUsers.forEach(registeredUser => {
        if(registeredUser.username == userData.username && registeredUser.password == userData.password){
          alert(`Logado com sucesso. Olá ${registeredUser.nickname}!`);
        } else {
          console.log("Username ou senha inválidos.");
        }
      });
    } else {
      console.log("Por favor, preencha todos os campos.");
    }
  };

  return (
    <>
      <Interface>
        <div className="login-content">
          <h1 className="login-title">Faça seu Login</h1>

          <LoginForm
            handleLoginAttempt={handleLoginAttempt}
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
