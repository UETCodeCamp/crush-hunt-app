import React, {Component} from 'react';


class FormUpload extends Component {

    render() {
        return (
            <div>
                <form className="informationUpload">
                    <input className="link" placeholder="Link ảnh"/>

                    <button className="link_button">Browse</button>

                    <br/>
                    <input className="caption" placeholder="Nói gì đó về bức ảnh"/>

                    <button className="button_form" type="submit">Đăng Ảnh</button>
                </form>
            </div>
        );
    }
}

export default FormUpload;
