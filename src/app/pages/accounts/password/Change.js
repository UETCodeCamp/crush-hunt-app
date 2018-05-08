import React, {Component} from "react";
import "./Change.css"
import HeaderAccount from "./HeaderAccount";
import Input from "./Input";
import {forgotPassword} from "../../../../services/ForgotPasswordServices";

class Change extends Component {
    constructor(props){
        super(props);

        this.state={
            password: '',
            confirm_password: ''
        }
    }

    _handleChangePassword(password) {
        this.setState({
            password: password
        });
    }

    _handleChangeConfirmPassword(password) {
        this.setState({
            confirm_password: password
        })
    }

    _handleOnSubmit(e) {
        e.preventDefault();
        const {password, confirm_password} = this.state;
        this.props.onClickSubmit(password, confirm_password);
    }

    render () {
        const {comment} = this.props;
        const Comment = !!comment ? <p className="Comment">{comment}</p> : <p></p>;

        return <div className="Change">
            <HeaderAccount/>

            {Comment}
            <form>
                <Input type="password" title="New Password" onChange={this._handleChangePassword.bind(this)} ></Input>
                <Input type="password" title="Confirm New Password" onChange={this._handleChangeConfirmPassword.bind(this)} ></Input>

                <button onClick={this._handleOnSubmit.bind(this)}>Change Password</button>
            </form>
        </div>;
    }
}

export default Change;