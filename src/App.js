import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Register from"./Register";
import Login from "./Login";
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Services from "./Services"
import "./App.css";


import logo from"./loc1.jpg";
export default class App extends Component {



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
                            <li>< a href="#contact" ><Link to="/ContactUs">ContactUs</Link></a></li>
                            <li><a href="#about"><Link to="/create1">AboutUs</Link></a></li>
                            <li><a href="#service"><Link to="/Services">Services</Link></a></li>
                        </ul>

                    </div>

                <img class="imgclass" src={logo} alt="Logo" />

                <Route path="/" exact component={Register}/>
                <Route path="/create" exact component={Login}/>
                <Route path="/create1" exact component={AboutUs}/>
                <Route path="/ContactUs" exact component={ContactUs}/>
                <Route path="/Services" exact component={Services}/>
            </div>
            </Router>
        );
    }
}

//export default App;











