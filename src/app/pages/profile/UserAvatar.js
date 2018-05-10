import React, {Component} from 'react';
import { _getLinkImage } from "../../../services/ProfileSerivces";
class UserAvatar extends Component {
    render() {
        var link = "";
        if(this.props._id){
            link = "https://crush.blogk.xyz/public/" + this.props._id + "/avatar";
        }

        return (
            <div className="Avatar">
                <img
                    src={link}
                    alt="avatar"/>
            </div>
        );
    }
}

export default UserAvatar;