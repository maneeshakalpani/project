import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import festival from "./festival.jpg";
import Register from "./Register";
import Login from "./Login";


export default class Festivals extends Component {






    render() {
        return (

                <div>
                    <div class="heading1">
                        <h1>LankaGuide
                            <button className="btn"><Link to="/create">Logout</Link></button>

                        </h1>

                    </div>
                    <div>

                    </div>

                    <div className="navbar">
                        <ul>
                            <li><a href="#festivals"><Link to="/Festivals">Festivales/Events</Link></a></li>
                            <li>< a href="#hotel"><Link to="/Hotel">Hotel Services</Link></a></li>
                            <li><a href="#emergency"><Link to="/Emergency">Emergency Services</Link></a></li>
                            <li><a href="#road"><Link to="/Emergency">Road Trips</Link></a></li>
                        </ul>

                    </div>

                    <img class="imgclass" src={ festival} alt="Logo" />
                    <h1 align="center">Festivals/Events</h1>

                    <button className="event">Festivals</button>
                    <button className="event1">Events</button>

                </div>

        );
    }



}