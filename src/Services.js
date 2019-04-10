import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";
import Fesitvals from "./Festivals"
import Hotel from "./Hotel"
import Emergency from "./Emergency"
import Road from "./Road"
import logo from "./loc1.jpg";


export default class Services extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div class="heading1">
                        <h1>LankaGuide
                            <button className="btn"><Link to="/create">Logout</Link></button>

                        </h1>

                    </div>
                    <div>

                    </div>

                    <div class="navbar">
                        <ul>
                            <li><a href="#festivals"><Link to="/Festivals">Festivales/Events</Link></a></li>
                            <li>< a href="#hotel" ><Link to="/Hotel">Hotel Services</Link></a></li>
                            <li><a href="#emergency"><Link to="/Emergency">Emergency Services</Link></a></li>
                            <li><a href="#road"><Link to="/Road">Road Trips</Link></a></li>
                        </ul>

                    </div>

                    <img class="imgclass" src={logo} alt="Logo" />

                    <Route path="/Festivals" exact component={Fesitvals}/>
                  <Route path="/Hotel" exact component={Hotel}/>
                    <Route path="/Emergency" exact component={Emergency}/>
                    <Route path="/Road" exact component={Road}/>
                </div>
            </Router>
        );
    }


}
