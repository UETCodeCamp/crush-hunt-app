import React, {Component} from "react";
import "./Input.css"

class Input extends Component {
    constructor(props){
        super(props);
        this.state= {
            email:''
        }
    }
    _handleChangeEmail(e) {
        const {value} = e.target;
        this.setState({
            email: value
        });

        this.props.onChangeEmail(this.state.email);
    }

    render () {
        const {title, type,onChange} = this.props;

        return <div className="Input">
            <div className="Title">
                <label>{title}</label>
            </div>

            <div className="TextInput">
                <input type={type} value={this.state.email} onChange={this._handleChangeEmail.bind(this)}/>
            </div>
        </div>;
    }
}

export default Input;