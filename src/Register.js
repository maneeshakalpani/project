import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.css"
import "bootstrap/dist/css/bootstrap-grid.min.css";
import  React1 from 'react';

const formvalid=formErrors=>{
    let valid=true;

    Object.values(formErrors).forEach(val=>[val.length>0 && (valid = false)]);
    return valid;
}


const emailRegex=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/);


export default class Register extends Component {
    constructor(props) {

        super(props);
        this.state = {
            username: null,
            password: null,
            email:null,
            formErrors: {
                username: "",
                password: "",
                email:""
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);

    }



    handleChange =e=>{
        e.preventDefault();
        const {name,value}=e.target;
        let formErrors=this.state.formErrors;

        switch (name) {
            case "username":
                formErrors.username = emailRegex.test(value) && value.length > 0 ? "valid" : "invalid";
                break;

            case "password":
                formErrors.password = emailRegex.test(value) && value.length > 0 ? "valid" : "invalid";
                break;

            case "email":
                formErrors.email = emailRegex.test(value) && value.length > 0 ? "valid" : "invalid";
                break;

            default:
                break;
        }
        this.setState({formErrors,[name] :value},()=>console.log(this.state));

    }

    handleSubmit = e => {
        e.preventDefault();

        if(formvalid(this.state.formErrors)) {
            console.log('hello');

            //username:${this.state.username}
            // "password:"$[this.state.password]);

        }
        else{
            console.log('form invalide') ;
        }

    };





    render() {
        const {formErrors} = this.state;
        return (




            <div>

                <div className="heading1">
                    <h1>LankaGuide
                        <button className="btn">Login</button>
                        <button className="btn2">Register</button>
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

                <form className="regbody" onSubmit={this.handleSubmit} noValidate >
                    <div className="myname">


                        <label>Username </label>


                        <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            type="text" name="username" placeholder="Username"
                            type="text"
                            noValidate
                            onChange={this.handleChange}

                        />
                        {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email} </span>)}

                        <br/>

                        <label>Password </label>

                        <input
                            className={formErrors.password.length > 0 ? "error" : null}
                            type="password" name="password" placeholder="Password" //value={this.state.password}
                            noValidate
                            onChange={this.handleChange}
                            /*     {formErrors.password.length > 0 && (
                                     <span className="errorMessage">{formErrors.username} </span>)}*/

                        />
                        <br/><br/>

                        <label>Email </label>


                        <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            type="text" name="email" placeholder="Username"
                            type="text"
                            noValidate
                            onChange={this.handleChange}

                        />
                        {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email} </span>)}







                        <button type="submit" className="registerbtn">Register</button>


                    </div>
                </form>
            </div>

        );
    }
}

