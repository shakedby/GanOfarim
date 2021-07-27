import React, { Component } from 'react';
import './Login.css';
import image from '../../Images/432.jpg';
import { Redirect } from "react-router-dom";
import Gallery from '../Gallery/Gallery';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            passwordReal: '1234',
            password: '',
            redirect: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {

        if (this.state.password === this.state.passwordReal)
            this.setState({ redirect: true })
        else {
            alert('the password is incorrect')
        }
    }

    render() {
        if (this.state.redirect)
            return <Gallery password={this.state.password} />
        // return <Redirect to={'/Gallery'} />
        else
            return (
                <div className="login">
                    <img className="img" src={image}></img>
                    <form onSubmit={this.handleSubmit}>
                        <p>להיתחברות הקש סיסמא</p>
                        <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        <input type="submit" value='Submit'></input>

                    </form>
                </div>
            )
    }

}
export default Login;