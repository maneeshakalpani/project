import React,{Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.css"
import EditTodo from"./todos-list.component";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import  React1 from 'react';

const formvalid=formErrors=>{
    let valid=true;

    Object.values(formErrors).forEach(val=>[val.length>0 && (valid = false)]);
    return valid;
}


const emailRegex=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/);


export default class CreateTodo extends Component {
    constructor(props) {

        super(props);
        this.state = {
            username: null,
            password: null,
            formErrors: {
                username: "",
                password: ""
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


            <form onSubmit={this.handleSubmit} noValidate>
                <div className="myname">


                    <label>username </label>


                    <input
                      className={formErrors.username.length > 0 ? "error" : null}
                        type="text" name="username" placeholder="Username"
                        type="text"
                        noValidate
                        onChange={this.handleChange}

                    />
                    {formErrors.username.length > 0 && (<span className="errorMessage">{formErrors.username} </span>)}


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


                    <button type="button" className="LoginButton">Login</button>

                    <button type="submit" className="LoginButton">Register</button>


                </div>
            </form>


        );
    }
}







