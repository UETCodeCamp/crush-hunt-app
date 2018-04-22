import React, {Component} from 'react';
import StatusFollow from "./StatusFollow";
import UserInformation from "./UserInformation";
import UserDetails from "./UserDetails";
import UserAvatar from "./UserAvatar";

class ProfileHeader extends Component {
    render() {
        return (
            <div className="ProfileHeader">
                <UserAvatar/>
                <div className="Info">
                    <UserInformation/>
                    <StatusFollow/>
                    <UserDetails/>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;