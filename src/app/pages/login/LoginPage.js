import React, {Component} from "react";
import PropTypes from "prop-types";
import {isAuthenticated} from "../../../services/AuthServices";
import {Link, Redirect} from "react-router-dom";
import "./LoginPage.css";
import {login} from "../../../services/APIServices";
import {setToken} from "../../../services/StorageServices";
import Footer from "../../shared-components/footer/Footer";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            loading: false,
            email: '',
            password: ''
        };


    }

    handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if (this.checkForm())
            login(email, password).then(response => {
                if (response.success) {
                    const {data} = response;
                    setToken(data.accessToken);
                    this.setState({auth:true});
                } else {
                    this.setState({
                        errorMessage: response.message //Display error if server return success false
                    })
                }
            }).catch();

    }

    checkForm() {
        const {email, password} = this.state;
        let errorMessage = '';
        if (email === '') {
            errorMessage = 'Email must not be empty';
        } else if (password === '') {
            errorMessage = 'Password must not be empty';
        }

        this.setState({
            errorMessage: errorMessage
        });

        return !errorMessage;
    }

    render() {
        const {auth} = this.state;
        const errorMessage = this.state.errorMessage ? <p className="ErrorMessage" >{this.state.errorMessage}</p> : '';
        if (auth) {
            return <Redirect to="/"/>;
        }

        const {email, password} = this.state;

        return (
            <div className="LoginPage">
                <div className="Main">
                    <div className="MainForm">
                        <h1 className="Title">Crush Hunt</h1>
                        <form className="Form">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                            <input type="text" placeholder="Email"
                                   onChange={this.handleChangeInput.bind(this, 'email')} value={email} name="email"/>
                            <input type="password" placeholder="Password"
                                   onChange={this.handleChangeInput.bind(this, 'password')} value={password}
                                   name="password"/>
                            <button onClick={this.handleSubmit.bind(this)}>Log in</button>
                            <p><Link to="/reset-password">Forgot Password?</Link></p>
                            {errorMessage}
                        </form>
                    </div>

                    <div className="RedirectLoginPage">
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }


}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;