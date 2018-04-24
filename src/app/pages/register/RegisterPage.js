import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import "./RegisterPage.css";
import Footer from "../../shared-components/footer/Footer";
import {register} from "../../../services/APIServices";


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            email: '',
            name: '',
            password: '',
        };

    }

    handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, name, password} = this.state;
        register(email, name, password).then(response => {
            if(response.success){

            }
        }).catch();

    }

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
                            <input type="email" placeholder="Email"
                                   onChange={this.handleChangeInput.bind(this, 'email')}/>
                            <input type="text" placeholder="Full Name"
                                   onChange={this.handleChangeInput.bind(this, 'name')}/>
                            <input type="password" placeholder="Password"
                                   onChange={this.handleChangeInput.bind(this, 'password')}/>
                            <input type="password" placeholder="Confirm Password"/>
                            <button onClick={this.handleSubmit}>Sign up</button>
                            <p>By signing up, you agree to our Terms & Privacy Policy.</p>
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