import React, {Component} from "react";
import "./ResetPassword.css";
import RightMenu from "./RightMenu";
import Footer from "../../../shared-components/footer/Footer";
import Reset from "./Reset";

class ResetPassword extends Component {
    render() {
        const dataRightMenu = [];
        return (
            <div className="ResetPassword">
                <div className="Main">
                    <div className="MidContent">
                        <RightMenu listLink={dataRightMenu}/>
                        <Reset/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default ResetPassword;