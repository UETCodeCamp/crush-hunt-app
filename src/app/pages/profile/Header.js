import React  from 'react';
import StatusFollow from "./StatusFollow.js";
import Infomation from "./Infomation.js";
import Name from "./Name.js";
import Avatar from "./Avatar.js";

class Header extends React.Component {

    render() {

        return (
            <div class="Header">
                <Avatar />
                <div class="Info">
                    <Infomation />
                    <StatusFollow />
                    <Name />
                </div>
            </div>
        );
    }

}

export default Header;