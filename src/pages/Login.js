import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./login.css";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "loonslab" && password === "loonslab") {
            // TODO: Handle successful login
            navigate("/Home");
        } else {
            setLoginError(true);
        }
    };

    return (
        <div className='loginform'>
            <h1 className='loginTitle'>Login</h1>
            <form onSubmit={handleLogin}>
                <div>

                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        required
                    />
                </div>
                <div>

                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        required
                    />
                </div>
                <button className='login_btn' type="submit">Login</button>
                {loginError && <div className='err'>Invalid username or password</div>}
            </form>
        </div>
    )
}

export default Login;
