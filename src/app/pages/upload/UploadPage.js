import React, {Component} from "react";
import heartImg from "./image/hearthUpload.png"
import "./UploadPage.css"
import ImageUpload from "./ImageUpload";
import DataUpload from "./DataUpload";

class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">
                <img className="heartUpload" alt="heart" src={heartImg}/>
                <section className="Upload">

                    <div className="content">
                        <div className="header">
                            <h2>Upload Your Crush</h2>
                        </div>

                        <ImageUpload/>

                        <DataUpload/>
                    </div>
                </section>
                <img className="heartUpload" alt="heart" src={heartImg}/>
            </div>

        );
    }
}

export default UploadPage;