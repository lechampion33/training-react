import React from "react";
import { Link } from 'react-router-dom'
const SignIN=()=>{
    <div className="userPass">
        <label>Username</label><br/>
        <label>password</label>
        <div className="LoginBTN">
        <center>
        <button><Link to="/home">LOGIN</Link></button>
        </center>
        </div>
        <div className="ForgetBTN">
            <center>
            <button><Link to="/forgetpassword">Forgot password?</Link></button>
            </center>
        </div>
        <div className="CreateAccBTN">
            <center>
            <button><Link to="/signuppage">Create new account</Link></button>
            </center>
        </div>
    </div>

}

export default SignIN