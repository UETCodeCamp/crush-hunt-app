import React, {Component} from "react";
import PropTypes from "prop-types";

class ProfilePage extends Component {
    render() {
        return (
            <div className="ProfilePage">
                <h1>Profile</h1>
                <h1>test</h1>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    any: PropTypes.any
};

export default ProfilePage;