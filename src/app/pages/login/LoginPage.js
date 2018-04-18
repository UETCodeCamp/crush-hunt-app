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
                <div className="MainLogin">
                    <div className="DivFormLogin">
                        <h1 className="TitleLogin">Crush Hunt</h1>
                        <form className="FormLogin">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                            <input type="text" value={this.mobileNumberOrEmail} placeholder="Mobile Number or Email"/>
                            <input type="text" placeholder="Full Name"/>
                            <input type="text" placeholder="Username"/>
                            <input type="text" placeholder="Password"/>
                            <button>Sign up</button>
                            <p>By signing up, you agree to our Terms & Privacy Policy.</p>
                        </form>
                    </div>

                    <div className="RedirectLoginPage">
                        <p>Have an account? <Link to="/login">Log in</Link></p>
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