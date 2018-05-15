import React, {Component} from "react";
import "./Reset.css"
import Input from "./Input";
import {forgotPassword} from "../../../../services/ForgotPasswordServices";

class Reset extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            isReset: false,
            isLoading: false,
            errorMessage: ''
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

        this.setState({
            isLoading: true
        });

        forgotPassword(email).then(response => {
            const {success, message} = response;

            if (success) {
                this.setState({
                    isReset: true,
                    errorMessage: ''
                });
            } else {
                this.setState({
                    errorMessage: message
                });
            }

            this.setState({
                isLoading: false
            });
        }).catch(error => {
            this.setState({
                errorMessage: error,
                isLoading: false
            });
        });
    }

    render () {
        const {isReset, isLoading, errorMessage} = this.state;
        const MessageReset = !isReset ? <p className="CommentReset">We can help you reset your password using your Instagram username or the email address linked to your account.</p> : <p className="CommentReset">Thanks! Please check email for a link to reset your password.</p>;
        const CommentReset = !!errorMessage ? <p className="CommentReset ErrorComment">{errorMessage}</p> : MessageReset;

        const ButtonForm = <button
            onClick={this._handleSubmit.bind(this)}
            className={isLoading ? "DisabledButton" : ''}
            disabled={isLoading}
        >
            Reset Password
        </button>;

        const Loading = isLoading ? <div className="Loading"></div> : <div></div>;

        return <div className="Reset">
            <div className="TextReset">Reset Password</div>
            {CommentReset}

            <form>
                <Input type="email" title="Email" onChange={this._handleChangeEmail.bind(this)} ></Input>

                <div className="Button">
                    {ButtonForm}
                    {Loading}
                </div>
            </form>
        </div>;
    }
}

export default Reset;