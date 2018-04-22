import React, {Component} from 'react';
import "./UploadPage.css"

class BrowseImage extends Component {

    render() {
        return (
            <div>
                <input className="link" placeholder="Link ảnh"/>

                <button className="link_button">Browse</button>
            </div>
        );
    }
}

export default BrowseImage;
