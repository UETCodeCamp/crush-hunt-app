import React, {Component} from "react";
import "./Input.css"

class Input extends Component {
    constructor(props){
        super(props);
        this.state= {
            value:''
        }
    }
    _handleChange(e) {
        const {value} = e.target;
        this.setState({
            value: value
        });

        this.props.onChange(value);
    }

    render () {
        const {title, type} = this.props;

        return <div className="Input">
            <div className="Title">
                <label>{title}</label>
            </div>

            <div className="TextInput">
                <input type={type} value={this.state.value} onChange={this._handleChange.bind(this)}/>
            </div>
        </div>;
    }
}

export default Input;