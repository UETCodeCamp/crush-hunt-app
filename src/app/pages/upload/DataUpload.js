import React, {Component, createRef} from 'react';
import {_Post, _PostUpload} from "../../../services/UploadService";

class DataUpload extends Component {

    state = {
        text: '',
        seclectedImage: [],
        loading: true,
    };

    inputFile=createRef();

    handleOnChange= e =>{
        this.setState({
            text: e.target.value,
        });
        this.handleDisabled();
    };

    handleOnFileChange = () =>{
    const data = new FormData();
    data.append('image', this.inputFile.current.files[0]);
    this.setState({
            seclectedImage: data,
        });
    console.log(this.state.seclectedImage);
    };

    handleDisabled(){

        if(this.state.text === '' )
            this.setState({
                disabled: true,
            });
        else if(this.state.seclectedImage !== '')
            this.setState({
                disabled: false,
            });
    }

    handleOnUpload(e){
        e.preventDefault();
        const data = new FormData();
        data.append('image', this.inputFile.current.files[0]);
        this.setState({
            loading: true,
        });
        _PostUpload(data)
            .then(res =>{
               this.setState({
                   seclectedImage: res.data,
               });
               const {image} = this.state.seclectedImage;
               this.props.seclectedFile(image);
            });
        this.handleDisabled();
    }


    clearUpload(){
        this.setState({
            text: '',
            seclectedImage: '',
        });
    }

    render() {
        return (
            <div>
                <form className="informationUpload" >
                    <input type="file" className="link"
                           onChange={this.handleOnUpload.bind(this)}
                           ref={ this.inputFile}
                    />
                    <br/>

                    <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                    <button className="button_form" type="button"  disabled={this.state.loading}>Đăng Ảnh</button>
                </form>
            </div>
        );
    }
}

export default DataUpload;
