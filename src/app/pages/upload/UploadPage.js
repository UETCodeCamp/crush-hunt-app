import React, {Component} from "react";
import PropTypes from "prop-types";
import "./UploadPage.css"
import ImageUpload from "./ImageUpload";
import DataUpload from "./DataUpload";
import Footer from "../../shared-components/footer/Footer";
import EnsureLoggedIn from "../../shared-components/EnsureLoggedIn";
import cameraImg from "./image/camera.png";


class UploadPage extends Component {
    state = {
        imageUp: cameraImg,
        up: false
    };

    handleSeclected(image) {

        this.setState({
            imageUp: image,
            up: true
        });
    }

    render() {
        return (
            <EnsureLoggedIn>
                <div className="UploadPage main-pusher">
                    <div className="wrapper">
                        <section className="Upload">

                            <div className="content">
                                <div className="header">
                                    <h2>Upload Your Crush</h2>
                                </div>

                                <ImageUpload imageFile={this.state.imageUp}/>

                                <DataUpload seclectedFile={this.handleSeclected.bind(this)} upFile={this.state.up}/>
                            </div>
                        </section>
                    </div>

                    <Footer/>
                </div>
            </EnsureLoggedIn>
        );
    }
}

UploadPage.propTypes = {
    history: PropTypes.object,
};

export default UploadPage;