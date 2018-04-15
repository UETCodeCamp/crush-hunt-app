import React, {Component} from "react";
import PropTypes from "prop-types";

class RegisterPage extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <h1>Register</h1>
            </div>
        );
    }
}

RegisterPage.propTypes = {
    history: PropTypes.object
};

export default RegisterPage;