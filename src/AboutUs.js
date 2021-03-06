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
                    <h1 align="center">AboutUs</h1>

                    <p>
                        The Website is designed in such a way that it is user friendly and is updated with all the latest statistics regarding the country. SriLanka T&T brings Sri Lanka and its famous places for sightseeing right to the tip of your fingers not only you will be very familiar with the country even before you visit it but you will be able to plan your itinerary in advance using the resources provided by the website itself. The website gives all the latest pictures and data about places and in the meantime provides helpful hints as to how to spend quality time in Sri Lanka .</p>


                    <Route path="/" exact component={Register}/>
                    <Route path="/create" exact component={Login}/>
                </div>
            </Router>
        );
    }


}