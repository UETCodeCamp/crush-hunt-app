import React, {Component} from "react";
import "./HeaderAccount.css"

class HeaderAccount extends Component {
    render() {
        return (
            <div className="HeaderAccount">
                <div className="Picture">
                    <button title="Change profile photo">
                        <img
                            alt="Change profile"
                            src="https://instagram.fhan2-2.fna.fbcdn.net/vp/0b9fad11c895f4d4e31217ad45c169ab/5B6654F8/t51.2885-19/s150x150/25005554_1561485523934402_2937452013476118528_n.jpg"
                        />
                    </button>
                </div>

                <div className="TextName">
                    <h1>UET Code Camp 2018</h1>
                </div>
            </div>
        );
    }
}

export default HeaderAccount;