import React, {Component} from "react";
import PropTypes from "prop-types";
import {isAuthenticated} from "../../../services/AuthServices";
import {Redirect} from "react-router-dom";

class LoginPage extends Component {
    state = {
        auth: isAuthenticated(),
        loading: false,
        error: ''
    };

    render() {
        const {auth} = this.state;

        if (auth) {
            return <Redirect to="/"/>;
        }

        return (
            <div className="LoginPage">
                <h1>QUANG _____</h1>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;