import React, {Component, createRef} from 'react';
import {PostUrlAndTitle, UploadImage} from "../../../services/UploadService";
import {Redirect} from 'react-router-dom'
import LoadingBar from "./LoadingBar";


class DataUpload extends Component {

    state = {
        text: '',
        seclectedImage: [],
        loading: true,
        id: '',
        uploaded: false
    };

    inputFile = createRef();

    handleOnChange = e => {
        this.setState({
            text: e.target.value,
        });
    };


    handleDisabled() {

        if (this.state.seclectedImage === '')
            this.setState({
                loading: true,
            });
        else if (this.state.seclectedImage !== '')
            this.setState({
                loading: false,
            });
    }

    handleToggleUpload(e) {
        e.preventDefault();
        const imageUrl = this.state.seclectedImage;
        const title = this.state.text;

        PostUrlAndTitle(imageUrl, title)
            .then((res) => {
                this.setState({
                    id: res.data._id,
                    uploaded: true
                });
                this.clearUpload();
            })
            .catch((err) => {
                const message = err.message || err;

                alert(message);
                this.setState({
                    loading: false
                });
            });
    }

    handleOnImage(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('image', this.inputFile.current.files[0]);
        this.setState({
            loading: true,
        });
        UploadImage(data)
            .then((res) => {
                this.setState({
                    seclectedImage: res.data,
                });
                const image = this.state.seclectedImage;
                this.props.seclectedFile(image);
            })
            .catch((err) => {
                const message = err.message || err;

                alert(message);
                this.setState({
                    loading: false
                });

            });

        this.handleDisabled();
    }


    clearUpload() {
        this.setState({
            text: '',
            seclectedImage: '',
        });
    }

    render() {
        if (this.state.uploaded === true) {
            return <Redirect to={`/posts/${this.state.id}`}/>
        }

        if (this.props.upFile === true) {

            return (

                <div>
                    <form className="informationUpload" onSubmit={this.handleToggleUpload.bind(this)}>
                        <br/>
                        <input type="file" className="link"
                               onChange={this.handleOnImage.bind(this)}
                               ref={this.inputFile}
                        />
                        <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                        <button className="button_form" type="Submit" disabled={this.state.loading}>Đăng Ảnh</button>
                    </form>
                </div>
            );
        }
        else if (this.state.loading === false && this.props.upFile === false) {

            return (

                <div>
                    <form className="informationUpload" onSubmit={this.handleToggleUpload.bind(this)}>
                        <br/>
                        <LoadingBar/>
                        <input type="file" className="link"
                               onChange={this.handleOnImage.bind(this)}
                               ref={this.inputFile}
                        />
                        <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                        <button className="button_form" type="Submit" disabled={this.state.loading}>Đăng Ảnh</button>
                    </form>
                </div>
            );
        }
        else {
            return (

                <div>
                    <form className="informationUpload" onSubmit={this.handleToggleUpload.bind(this)}>
                        <br/>
                        <input type="file" className="link"
                               onChange={this.handleOnImage.bind(this)}
                               ref={this.inputFile}
                        />
                        <input className="caption" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                        <button className="button_form" type="Submit" disabled={this.state.loading}>Đăng Ảnh</button>
                    </form>
                </div>
            );
        }

    }
}

export default DataUpload;
