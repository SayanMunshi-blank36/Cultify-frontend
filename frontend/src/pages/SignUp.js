import { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.jpg';

function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='signUp'>
            <div className="form-container">
                <div className="form">
                    <div className='heading'>
                        <img className='cultifyLogo' src={logo} alt="logo" />
                        <h1>Cultify</h1>
                    </div>
                    <p className='signUpPara'>
                        Sign up to becoem a part of your favorite Cult.
                    </p>
                    <div>
                        <input type="email" name="email" id="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" name="username" id="username" placeholder='Username' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <p className='signUpPara' style={{ fontSize: "0.9rem", margin: "3px 0px" }}>
                        By signing up, you agree to our Terms, <br /> privacy policy and cookies policy.
                    </p>
                    <input type="submit" id='submit-btn' value="Sign Up" />
                </div>

                <div className="form2">
                    Have an account ?
                    <Link to="/signin" id='lineline'>
                        <span>Sign In</span>
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default SignUp;
