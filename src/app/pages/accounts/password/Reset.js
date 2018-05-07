import React, {Component} from "react";
import "./Reset.css"
import Input from "./Input";
import {forgotPassword} from "../../../../services/ResetPasswordServices";

class Reset extends Component {
    constructor(props){
        super(props);

        this.state={
            email:''
        }
    }

    _handleChangeEmail(email) {
        this.setState({
            email : email,
        });
    }

    _handleSubmit(e){
        e.preventDefault();
        const {email} = this.state;

        forgotPassword(email).then(response => {
            console.log(response);
        })
    }

    render () {
        return <div className="Reset">
            <div className="TextReset">Reset Password</div>
            <p className="CommentReset">We can help you reset your password using your Instagram username or the email address linked to your account.</p>

            <form>
                <Input type="email" title="Email" onChangeEmail={this._handleChangeEmail.bind(this)} />
                <button onClick={this._handleSubmit.bind(this)}>Reset Password</button>
            </form>
        </div>;
    }
}

export default Reset;