import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

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
                <h1>Register</h1>

                <form>
                    <button onClick={this._handleSubmit}>Register</button>
                </form>
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