import React, {Component} from "react";
import "./ChangePassword.css";
import RightMenu from "./RightMenu";
import Change from "./Change";
import Footer from "../../../shared-components/footer/Footer";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: '',
            password: '',
            confirm_password: ''
        };
    }

    render() {
        const dataRightMenu = [
            {
                text: 'Edit Profile',
                link: '/accounts/edit/',
                active: false
            },
            {
                text: 'Change Password',
                link: '/accounts/password/change/',
                active: true
            },
            {
                text: 'Authorized Applications',
                link: '/accounts/manage_access/',
                active: false
            },
            {
                text: 'Email and SMS',
                link: '/emails/settings/',
                active: false
            },
            {
                text: 'Manage Contacts',
                link: '/accounts/contact_history/',
                active: false
            },
            {
                text: 'Privacy and Security',
                link: '/accounts/privacy_and_security/',
                active: false
            }
        ];

        return (
            <div className="ChangePassword">
                <div className="Main">
                    <div className="MidContent">
                        <RightMenu listLink={dataRightMenu} />
                        <Change />
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default ChangePassword;