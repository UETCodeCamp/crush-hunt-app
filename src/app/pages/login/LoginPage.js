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
                <h1>Login page QUANG</h1>
=======
                <h1>Login page 123</h1>
>>>>>>> 8f61647cd5c5dbd68af4d7fae69f89d1fd3c0ac0
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;