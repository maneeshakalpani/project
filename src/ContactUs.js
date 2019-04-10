import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Register from"./Register";
import Login from "./Login";
import AboutUs from "./AboutUs"
import "./App.css";

import logo from"./loc1.jpg";


export default class EditTodo extends Component{

    render() {
        return (
            <Router>
                <div>
                    <div class="heading1">
                        <h1>LankaGuide
                            <button className="btn"><Link to="/create">Login</Link></button>
                            <button className="btn2"><Link to="/">Register</Link></button>
                        </h1>

                    </div>
                    <div>

                    </div>

                    <div class="navbar">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li>< a href="#contact" >ContactUs</a></li>
                            <li><a href="#about">AboutUs</a></li>
                            <li><a href="#service">Services</a></li>
                        </ul>

                    </div>

                    <img class="imgclass" src={logo} alt="Logo" />
                    <h1 align="center"> Contact Us</h1>
                    <p align="center"><b>Email:LankaGuide@gmail.com</b></p>
                    <p align="center"><b>Hot Line 0199</b></p>
                    <p align="center"><b>LankaGuide</b></p>

                        <Route path="/" exact component={Register}/>
                    <Route path="/create" exact component={Login}/>
                </div>
            </Router>
        );
    }


}