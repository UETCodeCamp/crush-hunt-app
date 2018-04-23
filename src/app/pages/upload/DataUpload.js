import React, {Component} from 'react';
import BrowseImage from "./BrowseImage";

class DataUpload extends Component {
    state= {
        text: '',
        imageSrc: '',
        disabled: true,
    };



    handleOnChange(e){
        const {value}=e.target.value;
        this.setState({
            text: value
        });
        if(value!=null) {
            this.setState({
                disabled: false,
            });
        }

    }

    handleOnSubmit(e){
        e.preventDefault();
        const{text,imageSrc}=this.state;
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
