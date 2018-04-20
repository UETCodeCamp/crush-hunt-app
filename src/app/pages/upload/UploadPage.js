import React, {Component} from "react";
import PropTypes from "prop-types";
import "./UploadPage.css"
class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">
                <section className="Upload">
                    <div className="Content">something</div>
                    <div className="inforUser">infor</div>
                </section>
            </div>
        );
    }
}

UploadPage.propTypes = {
    history: PropTypes.object
};

export default UploadPage;