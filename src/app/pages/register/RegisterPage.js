import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import "./RegisterPage.css";
import Footer from "../../shared-components/footer/Footer";
import {_register} from "../../../services/UserServices";


class RegisterPage extends Component {
    state = {
        success: false,
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        disabledButton: false,
        loadingButton: false
    };

    setLoadingButton(checkLoading) {
        this.setState({
            loadingButton: checkLoading
        });
    }

    handleChangeInput(field, e) {
        const {value} = e.target;
        this.setState({
            [field]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setLoadingButton(true);
        const {email, name, password} = this.state;
        if (this.checkForm()) {
            _register(email, name, password).then(response => {
                if (response.success) {
                    this.setState({
                        success: true
                    })
                }
                else {
                    this.setState({
                        errorMessage: response.message //Display error if server return success false
                    })
                }
                this.setLoadingButton(false);
            }).catch(response => {
                this.setLoadingButton(false);
            });
        }
    }

    checkForm() {
        const {email, name, password, confirmPassword} = this.state;
        let errorMessage = '';
        if (email === '') {
            errorMessage = 'Email must not be empty';
        } else if (name === '') {
            errorMessage = 'Name must not be empty';
        } else if (password === '') {
            errorMessage = 'Password must not be empty';
        } else if (password !== confirmPassword) {
            errorMessage = 'Password and Confirm password must match';
        }

        this.setState({
            errorMessage: errorMessage,
        });

        if (errorMessage) {
            this.setLoadingButton(false);
        }

        return !errorMessage;
    }


    render() {
        if (this.state.success) {
            return <Redirect to="/login"/>
        }

        const {disabledButton, loadingButton} = this.state;

        const errorMessage = this.state.errorMessage ? <p className="ErrorMessage">{this.state.errorMessage}</p> : '';

        const ButtonForm = <button
            onClick={this.handleSubmit.bind(this)}
            className={disabledButton || loadingButton ? "DisabledButton" : ''}
            disabled={disabledButton || loadingButton}
        >
            Sign up
        </button>;

        const Loading = loadingButton ? <div className="Loading"></div> : <div></div>;

        return (
            <div className="RegisterPage">
                <div className="Main">
                    <div className="MainForm">
                        <h1 className="Title">Crush Hunt</h1>
                        <form className="Form">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                            <input type="email" placeholder="Email"
                                   onChange={this.handleChangeInput.bind(this, 'email')}/>
                            <input type="text" placeholder="Full Name"
                                   onChange={this.handleChangeInput.bind(this, 'name')}/>
                            <input type="password" placeholder="Password"
                                   onChange={this.handleChangeInput.bind(this, 'password')}/>
                            <input type="password" placeholder="Confirm Password"
                                   onChange={this.handleChangeInput.bind(this, 'confirmPassword')}/>
                            <div className="Button">
                                {ButtonForm}
                                {Loading}
                            </div>
                            <p>By signing up, you agree to our Terms & Privacy Policy.</p>
                            {errorMessage}
                        </form>
                    </div>

                    <div className="RedirectRegisterPage">
                        <p>Have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }


}

RegisterPage.propTypes = {
    history: PropTypes.object
};

export default RegisterPage;