import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import './App.css';
import PrivateRoute from "./utils/router/PrivateRoute";

function App() {
    return (
        <div className="App">
            <Routes>

                <Route path="login" element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
