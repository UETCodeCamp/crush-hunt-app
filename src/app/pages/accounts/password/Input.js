import React, {Component} from "react";
import "./Input.css"

class Input extends Component {
    render () {
        const {title, type} = this.props;

        return <div className="Input">
            <div className="Title">
                <label>{title}</label>
            </div>

            <div className="TextInput">
                <input type={type} value=""/>
            </div>
        </div>;
    }
}

export default Input;