import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// CSS
import "./LoginForm.css";

// COMPONENTS
import Button from "../Button";

export default function LoginForm({ handleLoginAttempt }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, toggleShowPassword] = useState(false);
  
  const handleSubmitForm = (event) => {
    event.preventDefault();

    handleLoginAttempt(userData);
  }

  return (
    <form className="login-form" onSubmit={handleSubmitForm}>
      <div className="login-form-field">
        <label htmlFor="login-user" className="login-form-field-label">
          Digite seu Username
        </label>
        <input
          type="text"
          name=""
          id="login-user"
          className="login-form-field-input"
          value={userData.username}
          onChange={event => {setUserData({...userData, username: event.target.value})}}
        />
      </div>

      <div className="login-form-field">
        <label htmlFor="login-pass" className="login-form-field-label">
          Digite sua senha
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name=""
          id="login-pass"
          className="login-form-field-input"
          onChange={event => {setUserData({...userData, password: event.target.value})}}
        />

        <AiFillEye
          onClick={() => {toggleShowPassword(!showPassword)}}
          style={showPassword ? { display: "none" } : {}}
          className="password-toggler"
        />
        <AiFillEyeInvisible
          onClick={() => {toggleShowPassword(!showPassword)}}
          style={!showPassword ? { display: "none" } : {}}
          className="password-toggler"
        />
      </div>
      <span className="login-form-error-message"></span>
      <Button>Entrar</Button>
    </form>
  );
}
