import React, {Component} from "react";
import PropTypes from "prop-types";
import {isAuthenticated} from "../../../services/AuthServices";
import {Redirect, Link} from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
    state = {
        auth: isAuthenticated(),
        loading: false,
        error: '',
        mobileNumberOrEmail: ''
    };

    render() {
        const {auth} = this.state;

        if (auth) {
            return <Redirect to="/"/>;
        }

        return (
            <div className="LoginPage">
                <div className="Main">
                    <div className="MainForm">
                        <h1 className="Title">Crush Hunt</h1>
                        <form className="Form">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                            <input type="email" value={this.mobileNumberOrEmail} placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button>Log in</button>
                            <p><Link to="/reset-password">Forgot Password?</Link></p>
                        </form>
                    </div>

                    <div className="RedirectLoginPage">
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;