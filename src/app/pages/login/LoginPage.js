import React, {Component} from "react";
import PropTypes from "prop-types";
import {isAuthenticated} from "../../../services/AuthServices";
import {Link, Redirect} from "react-router-dom";
import "./LoginPage.css";
import Footer from "../../shared-components/footer/Footer";


class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: isAuthenticated(),
            loading: false,
            error: '',
            email: '',
            password: ''
        };
    }

    handleChangeEmail(e) {
        const email = e.target.value;
        this.setState({email: email});
    }

    handleChangePassword(e) {
        const password = e.target.value;
        this.setState({password: password});
    }

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
                            <input type="email" placeholder="Email" onChange={e => onChange={e => this.handleChangePassword(e)}this.handleChangeEmail(e)}/>
                            <input type="password" placeholder="Password" />
                            <button>Log in</button>
                            <p><Link to="/reset-password">Forgot Password?</Link></p>
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