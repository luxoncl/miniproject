import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="top__content">
        <div className="top__left">
          <h1> BrainWave</h1>
        </div>
        <div className="top__right">
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="content__left">
          <h1>
            You are <span>ONE </span>
          </h1>
          <h1> Step AWAY!</h1>
        </div>
        <div className="content__right">
          <form className="input">
            <p>LOGIN</p>
            USERNAME <br />
            <input type="text" name="name" /> <br /> <br />
            PASSWORD <br />
            <input type="text" name="pass" /> <br /> <br />
            <input className="submit" type="button" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
