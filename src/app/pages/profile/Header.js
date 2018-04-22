import React  from 'react';
import StatusFollow from "./StatusFollow.js";
import Infomation from "./Infomation.js";
import Name from "./Name.js";
import Avatar from "./Avatar.js";

class Header extends React.Component {

    render() {

        return (
            <div className="Header">
                <Avatar />
                <div className="Info">
                    <Infomation />
                    <StatusFollow />
                    <Name />
                </div>
            </div>
        );
    }

}

export default Header;