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


    handleDisabled(){

        if(this.state.text === '' )
            this.setState({
                loading: true,
            });
        else if(this.state.seclectedImage !== '')
            this.setState({
                loading: false,
            });
    }

    handleToggleUpload(e){
        e.preventDefault();
        const imageUrl=this.state.seclectedImage;
        const title=this.state.text;
        console.log(imageUrl,title);
        _Post(imageUrl,title)
            .then=()=>{
                console.log(title);
                this.clearUpload();

            };
    }

    handleOnImage(e){
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
               const image = this.state.seclectedImage;
               console.log(image);
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
                           onChange={this.handleOnImage.bind(this)}
                           ref={ this.inputFile}
                    />
                    <br/>

                    <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                    <button className="button_form" type="button" onClick={this.handleToggleUpload.bind(this)}  disabled={this.state.loading}>Đăng Ảnh</button>
                </form>
            </div>
        );
    }
}

export default DataUpload;
