import React, {Component} from "react";
import "./Reset.css"
import Input from "./Input";

class Reset extends Component {
    render () {
        return <div className="Reset">
            <div className="TextReset">Reset Password</div>
            <p className="CommentReset">We can help you reset your password using your Instagram username or the email address linked to your account.</p>

            <form>
                <Input type="email" title="Email"/>
                <button>Reset Password</button>
            </form>
        </div>;
    }
}

export default Reset;