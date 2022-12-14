import React from "react";
import { Link } from 'react-router-dom'
const SignIN=()=>{
    <div className="userPass">
        <label>Username</label>
        <input type={Text}/>
        <label>password</label>
        <input type={Password}/>
    </div>
}
const Login=()=>{
    return(
        <div className="LoginBTN">
            <center>
            <button><Link to="/home">LOGIN</Link></button>
            </center>
        </div>
    );
}
const Forgetpassword=()=>{
    return(
        <div className="ForgetBTN">
            <center>
            <button><Link to="/forgetpassword">Forgot password?</Link></button>
            </center>
        </div>
    );
}
const Createaccount=()=>{
    return(
        <div className="CreateAccBTN">
            <center>
            <button><Link to="/signuppage">Create new account</Link></button>
            </center>
        </div>
    )
}

export {SignIN,Login,Createaccount,Forgetpassword}