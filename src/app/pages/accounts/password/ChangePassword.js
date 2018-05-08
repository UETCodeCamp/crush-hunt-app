import React, {Component} from "react";
import "./ChangePassword.css";
import RightMenu from "./RightMenu";
import Change from "./Change";
import Footer from "../../../shared-components/footer/Footer";
import {reset_password} from "../../../../services/ResetPasswordServices";
import {Redirect} from "react-router-dom";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirm_password: '',
            errorMessage: '',
            isReset: false
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        // this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(password, confirm_password) {
        const {access_token} = this.props.match.params;
        const email = this.props.location.search.replace("?email=", "");
        if (password != confirm_password) {
            this.setState({
                errorMessage: 'Incorrect Confirm Password.'
            })
        } else {
            reset_password(access_token, email, password).then(response => {
                console.log(response);
                const {success} = response;

                if (success) {
                    this.setState({
                        errorMessage: '',
                        isReset: true
                    });
                } else {
                    const {message} = response;
                    this.setState({
                        errorMessage: message,
                        isReset: false
                    });
                }
            }).catch(error => {
                this.setState({
                    errorMessage: error,
                    isReset: false
                })
            })
        }
    }

    render() {
        const dataRightMenu = [];
        const {errorMessage, isReset} = this.state;

        if (isReset) {
            return (
                <Redirect to="../"/>
            );
        }

        return (
            <div className="ChangePassword">
                <div className="Main">
                    <div className="MidContent">
                        <RightMenu listLink={dataRightMenu} />
                        <Change comment={errorMessage} onClickSubmit={this.handleOnClick.bind(this)} />
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default ChangePassword;