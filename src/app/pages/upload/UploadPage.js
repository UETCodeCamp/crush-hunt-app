import React, {Component} from "react";
import PropTypes from "prop-types";
import heartImg1 from "./image/anh1.2.jpg"
import heartImg2 from "./image/anh1.1.jpg"
import "./UploadPage.css"
import ImageUpload from "./ImageUpload";
import DataUpload from "./DataUpload";
import Footer from "../../shared-components/footer/Footer";

class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">
                <div className="wrapper">

                    <section className="Upload">

                        <div className="content">
                            <div className="header">
                                <h2>Upload Your Crush</h2>
                            </div>

                            <ImageUpload/>

                            <DataUpload/>
                        </div>
                    </section>

                </div>

                <Footer/>
            </div>
        );
    }
}

UploadPage.propTypes = {
    history: PropTypes.object,
};

export default UploadPage;