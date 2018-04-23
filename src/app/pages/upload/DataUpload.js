import React, {Component} from 'react';
import BrowseImage from "./BrowseImage";
import "./UploadPage.css"


class DataUpload extends Component {

    render() {
        return (
            <div>
                <form className="informationUpload">
                    <BrowseImage/>

                    <br/>

                    <input className="caption" placeholder="Nói gì đó về bức ảnh"/>

                    <button className="button_form" type="submit" disabled={true}>Đăng Ảnh</button>
                </form>
            </div>
        );
    }
}

export default DataUpload;
