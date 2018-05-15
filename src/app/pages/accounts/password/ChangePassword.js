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
            isReset: false,
            isLoading: false
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(password, confirm_password) {
        this.setState({
            isLoading: true
        });

        const {access_token} = this.props.match.params;
        const email = this.props.location.search.replace("?email=", "");

        if (password != confirm_password) {
            this.setState({
                errorMessage: 'Incorrect Confirm Password.',
                isLoading: false
            })
        } else {
            reset_password(access_token, email, password).then(response => {
                console.log(response);
                const {success} = response;

                if (success) {
                    this.setState({
                        errorMessage: '',
                        isReset: true,
                        isLoading: false
                    });
                } else {
                    const {message} = response;
                    this.setState({
                        errorMessage: message,
                        isReset: false,
                        isLoading: false
                    });
                }
            }).catch(error => {
                this.setState({
                    errorMessage: error,
                    isReset: false,
                    isLoading: false
                })
            })
        }
    }

    render() {
        const dataRightMenu = [];
        const {errorMessage, isReset, isLoading} = this.state;

        if (isReset) {
            return (
                <Redirect to="../"/>
            );
        }

        return (
            <div className="ChangePassword">
                <div className="Main">
                    <div className="MidContent">
                        <RightMenu listLink={dataRightMenu}/>
                        <Change comment={errorMessage} onClickSubmit={this.handleOnClick.bind(this)} isLoading={isLoading}/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default ChangePassword;