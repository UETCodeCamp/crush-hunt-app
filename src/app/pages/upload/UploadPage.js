import React, {Component} from "react";
import PropTypes from "prop-types";
import heartImg1 from "./image/anh1.2.jpg"
import heartImg2 from "./image/anh1.1.jpg"
import "./UploadPage.css"
import ImageUpload from "./ImageUpload";
import FormUpload from "./FormUpload";

class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">

                <img className="heartUpload" alt="heart" src={heartImg1}/>
                <section className="Upload">

                    <div className="content">
                        <div className="header">
                            <h2>Upload Your Crush</h2>
                        </div>

                        <ImageUpload/>

                        <FormUpload/>
                    </div>
                </section>
                <img className="heartUpload" alt="heart" src={heartImg2}/>
            </div>

        );
    }
}

UploadPage.propTypes = {
    history: PropTypes.object
};

export default UploadPage;