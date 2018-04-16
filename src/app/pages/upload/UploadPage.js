import React, {Component} from "react";
import PropTypes from "prop-types";

class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">
                <h1>Upload a post 123</h1>
            </div>
        );
    }
}

UploadPage.propTypes = {
    history: PropTypes.object
};

export default UploadPage;