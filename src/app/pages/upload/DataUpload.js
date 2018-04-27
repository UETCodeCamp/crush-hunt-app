import React, {Component} from 'react';
import {_Post} from "../../../services/UploadService";

class DataUpload extends Component {

    state = {
        text: '',
        seclectedImage: [],
        disabled: true,
    };

    handleOnChange= e =>{
        this.setState({
            text: e.target.value,
        });
        this.handleDisabled();
    };

    handleOnFileChange = event =>{
        console.log(event.target.files[0]);
        this.setState({
            seclectedImage: event.target.files[0],
        });
        console.log(this.state.seclectedImage);
        this.props.seclectedFile(this.state.seclectedImage);
    };

    handleDisabled(){

        if(this.state.text === '' )
            this.setState({
                disabled: true,
            });
        else if(this.state.text !== '')
            this.setState({
                disabled: false,
            });
    }

    handleOnSubmit(e){
        e.preventDefault();
        const{text}=this.state;
        _Post(text)
            .then (() =>{
                this.clearUpload();
        });
    }


    clearUpload(){
        this.setState({
            text: '',
            imageSrc: '',
        });
    }

    render() {
        return (
            <div>
                <form className="informationUpload" onSubmit={this.handleOnSubmit.bind(this)}>
                    <input type="file" className="link"  onChange={this.handleOnFileChange.bind(this)}/>
                    <br/>

                    <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                    <button className="button_form" type="submit" disabled={this.state.disabled}>Đăng Ảnh</button>
                </form>
            </div>
        );
    }
}

export default DataUpload;
