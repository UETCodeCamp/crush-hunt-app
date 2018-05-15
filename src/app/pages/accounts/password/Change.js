import React, {Component} from "react";
import "./Change.css"
import HeaderAccount from "./HeaderAccount";
import Input from "./Input";

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
        const {comment, isLoading} = this.props;

        const Comment = !!comment ? <p className="Comment">{comment}</p> : <p></p>;

        const ButtonForm = <button
            onClick={this._handleOnSubmit.bind(this)}
            className={isLoading ? "DisabledButton" : ''}
            disabled={isLoading}
        >
            Change Password
        </button>;

        const Loading = isLoading ? <div className="Loading"></div> : <div></div>;

        return <div className="Change">
            <HeaderAccount/>

            {Comment}
            <form>
                <Input type="password" title="New Password" onChange={this._handleChangePassword.bind(this)} ></Input>
                <Input type="password" title="Confirm New Password" onChange={this._handleChangeConfirmPassword.bind(this)} ></Input>

                <div className="Button">
                    {ButtonForm}
                    {Loading}
                </div>
            </form>
        </div>;
    }
}

export default Change;