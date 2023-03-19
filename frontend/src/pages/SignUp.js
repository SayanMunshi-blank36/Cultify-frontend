import { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const loginHandler = ()=>{
  axios.post('https://cultify-backend-production.up.railway.app/api/user',
    {
      "email" : email,
      "password":password,
      "name": userName,
      "joinedCults":["6416ca1f4fcdeb1b10ffff10","6416ca7b9d5a2cd5ee453cd5","6416ca7b9d5a2cd5ee453cd5"],
    
  })
}

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <div className="heading">
            <img className="cultifyLogo" src={logo} alt="logo" />
            <h1>Cultify</h1>
          </div>
          <p className="signUpPara" style={{ color: "#fff" }}>
            Sign up to become a part of your favorite Cult.
          </p>
          <div>
            <label>What's Your Email ?</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="ame"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <p
            className="signUpPara"
            style={{
              fontSize: "0.9rem",
              margin: "15px 0px",
              width: "80%",
              textAlign: "center",
            }}
          >
            By signing up, you agree to our Terms, privacy policy and cookies
            policy.
          </p>
          <button type="submit" id="submit-btn"  onClick={loginHandler} > Sign Up</button>
        </div>

        <div className="form2">
          Have an account ?
          <Link to="/signin" id="lineline">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
