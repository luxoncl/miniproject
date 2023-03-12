import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="header__content">
        <div className="header__left">
          <h1> BrainWave</h1>
        </div>
        <div className="header__right">
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>
      </div>
      <div className="body__content">
        <div className="body__left">
          <h1> REGISTER</h1>
          <h1> NOW!</h1>
        </div>
        <div className="body__right">
          <form className="input">
            <p>REGISTRATION</p>
            NAME <br />
            <input type="text" name="name" /> <br /> <br />
            DATE OF BIRTH <br />
            <input type="text" name="name" /> <br /> <br />
            PHONE NUMBER <br />
            <input type="text" name="name" /> <br /> <br />
            COUNTRY
            <br />
            <select name="country">
              <option value="india">INDIA</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="africa">AFRICA</option>
            </select>
            <br /> <br />
            CREATE USERNAME <br />
            <input type="text" name="name" /> <br /> <br />
            CREATE PASSWORD <br />
            <input type="text" name="name" /> <br /> <br />
            CONFIRM PASSWORD <br />
            <input type="text" name="name" /> <br /> <br />
            <p>SELECT ROLE </p>
            <input type="radio" id="develop" name="role" value="developer" />
            <label for="developer">DEVELOPER</label>
            <input type="radio" id="use" name="role" value="user" />
            <label for="user">USER</label> <br /> <br />
            <input type="checkbox" id="" name="agreement" value="" />
            <br />
            <label className="terms">I agree to the terms and conditions</label>
            <br /> <br />
            <input className="submit" type="button" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
