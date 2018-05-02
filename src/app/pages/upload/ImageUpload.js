import React, {Component} from 'react';


class ImageUpload extends Component {
    render() {
        return (
            <div className="img_upload">
                <img className="thumb" alt="camera" ref={this.props.imageFile}/>
            </div>
        );
    }
}


export default ImageUpload;
