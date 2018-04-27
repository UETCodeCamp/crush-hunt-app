import React, {Component} from "react";
import "./Change.css"
import HeaderAccount from "./HeaderAccount";
import Input from "./Input";

class Change extends Component {
    render () {
        return (
            <div className="Change">
                <HeaderAccount/>
                <form>
                    <Input type="password" title="Old Password"/>
                    <Input type="password" title="New Password"/>
                    <Input type="password" title="Confirm New Password"/>

                    <button>Change Password</button>
                </form>
            </div>
        );
    }
}

export default Change;