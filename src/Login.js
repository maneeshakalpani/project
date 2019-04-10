import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.css"
import "bootstrap/dist/css/bootstrap-grid.min.css";
import  React1 from 'react';


export default class Login extends Component {


    render() {

        return (


            <div>

                <div className="heading1">
                    <h1>LankaGuide


                    </h1>

                </div>

                <div>

                </div>

                <div className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li>< a href="#me">ContactUs</a></li>
                        <li><a href="#contact">AboutUs</a></li>
                        <li><a href="#about">Services</a></li>
                    </ul>

                </div>

                <form className="regbody">
                    <div className="myname">


                        <label>Username </label>


                        <input

                            type="text" name="username" placeholder="Username"
                            type="text"
                            noValidate
                            onChange={this.handleChange}

                        />


                        <br/>

                        <label>Password </label>

                        <input

                            type="password" name="password" placeholder="Password"
                            noValidate
                            onChange={this.handleChange}


                        />
                        <br/><br/>


                        <button type="submit" className="registerbtn">Login</button>


                    </div>
                </form>
            </div>

        );
    }

}