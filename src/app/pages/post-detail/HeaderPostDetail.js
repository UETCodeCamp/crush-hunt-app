import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class HeaderPostDetail extends Component {
    render() {
        const follow = (this.props.follow) ?
            <div className="following">
                <a href="/" onClick={this.props.toggleFollow}>Following</a>
            </div>
            :
            <div className="follow">
                <a href="/" onClick={this.props.toggleFollow}>Follow</a>
            </div>;

        return (
            <header>
                <div className="profile-img">
                    <Link to="/profile"><img
                        src={this.props.userAvatar}
                        alt="unable to load"/></Link>
                </div>
                <div className="profile">
                    <Link to="/profile" className="user-name">{this.props.username}</Link>
                </div>
                <div className="dot">
                    <span> •</span>
                </div>
                {follow}
            </header>
        );
    }
}

HeaderPostDetail.propsTypes = {
    follow: PropTypes.bool.isRequired,
    toggleFollow: PropTypes.func.isRequired,
};

export default HeaderPostDetail;