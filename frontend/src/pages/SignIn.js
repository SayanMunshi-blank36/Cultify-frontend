import { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";

function SignIn() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <div className="heading">
            <img className="cultifyLogo" src={logo} alt="logo" />
            <h1>Cultify</h1>
          </div>
          <p className="signUpPara" style={{ color: "#fff" }}>
            To Continue Login to Cultify.
          </p>
          <div style={{ width: "26rem" }}>
            <label>Enter Email or Username</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter Your Email or Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ width: "26rem" }}>
            <label>Enter Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input type="submit" id="submit-btn" value="Login" />
        </div>

        <div className="form2">
          Don't have an account ?
          <Link to="/signup" id="lineline">
            <span> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
