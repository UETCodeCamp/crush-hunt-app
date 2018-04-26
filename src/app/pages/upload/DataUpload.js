import React, {Component} from 'react';
import BrowseImage from "./BrowseImage";
import {_Post} from "../../../services/UploadService";

class DataUpload extends Component {

    state = {
        text: '',
        imageSrc: '',
        disabled: true,
    };

    handleOnChange(e){
        const {value}=e.target;
        console.log(value);
        this.setState({
            text: value,
        });
        this.handleDisabled();
    }

    handleDisabled(){

        if(this.state.text === '' )
            this.setState({
                disabled: true,
            });
        else if(this.state.text !== ''&& this.state.imageSrc !== '')
            this.setState({
                disabled: false,
            });
    }

    handleOnSubmit(e){
        e.preventDefault();
        const{text,imageSrc}=this.state;
        _Post(text,imageSrc);
    }


    render() {
        return (
            <div>
                <form className="informationUpload" onSubmit={this.handleOnSubmit.bind(this)}>
                    <BrowseImage/>
                    <br/>

                    <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)} placeholder="Nói gì đó về bức ảnh"/>
                    <button className="button_form" type="submit" disabled={this.state.disabled}>Đăng Ảnh</button>
                </form>
            </div>
        );
    }
}

export default DataUpload;
