import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import "./RegisterPage.css";
import Footer from "../../shared-components/footer/Footer";


class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            success: false,
            email: '',
            name: '',
            password: '',
        };
    }



    handleChangeEmail(e) {
        const email = e.target.value;
        this.setState({email: email});
    }

    handleChangeName(e) {
        const name = e.target.value;
        this.setState({name: name});
    }

    handleChangePassword(e) {
        const password = e.target.value;
        this.setState({password: password});

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
                            <input type="email" placeholder="Email" onChange={e => this.handleChangeEmail(e)}/>
                            <input type="text" placeholder="Full Name" onChange={e => this.handleChangeName(e)}/>
                            <input type="password" placeholder="Password" onChange={e => this.handleChangePassword(e)}/>
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

    handleSubmit = (e) => {
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