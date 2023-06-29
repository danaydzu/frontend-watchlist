import React from 'react';
import classes from './login.module.css';
import Greeting from "./Greeting";
const Login = () => {
    const name = "Alex"
    return (

        <div className={classes.heading}>
           <h1>Login page</h1>
            <Greeting name={name}/>
        </div>
    );
};

export default Login;