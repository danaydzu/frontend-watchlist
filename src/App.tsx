import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";

import './index.css'
import PrivateRoute from "./utils/router/PrivateRoute";

import AuthRootComponent from "./components/auth/AuthRootComponent";

function App() {
    return (
        <div className="App">
            <Routes>

                <Route path="login" element={<AuthRootComponent/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="registration" element={<AuthRootComponent/>}/>


            </Routes>

        </div>
    );
}

export default App;
