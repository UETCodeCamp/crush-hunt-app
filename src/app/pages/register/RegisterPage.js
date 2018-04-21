import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect, Link} from "react-router-dom";
import "./RegisterPage.css";


class RegisterPage extends Component {
    state = {
        success: false
    };

    render() {
        if (this.state.success) {
            return <Redirect to="/login"/>
        }

        return (
            <div className="RegisterPage">
                <div className="Main">
                    <div className="MainForm">
                        <h1 className="Title">Crush Hunt</h1>
                        <form className="Form">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Full Name"/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Confirm Password"/>
                            <button onClick={this._handleSubmit}>Sign up</button>
                            <p>By signing up, you agree to our Terms & Privacy Policy.</p>
                        </form>
                    </div>

                    <div className="RedirectRegisterPage">
                        <p>Have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
            </div>
        );
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            this.setState({
                success: true
            });
        }, 1000);
    }
}

RegisterPage.propTypes = {
    history: PropTypes.object
};

export default RegisterPage;