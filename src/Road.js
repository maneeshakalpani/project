import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import shopping from "./shopping.jpg";
import Register from "./Register";
import Login from "./Login";



export default class Road extends Component {


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

                <img class="imgclass" src={shopping} alt="Logo" />
                <h1 align="center">Road Trips</h1>

                <button className="event">Travelling</button>
                <button className="event1">Ticket Booking</button>
                <button className="event1">Shopping</button>


            </div>

        );
    }



}