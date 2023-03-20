import { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function postData() {
    axios.post('https://cultify-backend-production.up.railway.app/api/user/login', {

      email: email,
      password: password

    })
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Signed in Successfully");
          console.log(data)
          localStorage.setItem("jwt", data.data.token)
          localStorage.setItem("user", JSON.stringify(data.data.user.name))
          navigate("/");
        }
        console.log(data)
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
          <input type="submit" id="submit-btn" value="Login" onClick={postData} />
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
