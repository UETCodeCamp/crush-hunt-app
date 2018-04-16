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
<<<<<<< HEAD
                <h1>Login page 123</h1>
                <h2>D Pop</h2>
=======
                <h1>Login page QUANG</h1>
>>>>>>> c70d454cbb0813ff9855363bcf9c3bb5b0206e1a
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;