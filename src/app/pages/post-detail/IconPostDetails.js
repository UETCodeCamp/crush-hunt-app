import React, {Component} from "react";
import PropTypes from "prop-types";

class IconPostDetails extends Component {
    toggleFocus = (e) => {
        e.preventDefault();
        this.props.toggleFocus();
    };
    
    render() {
        return (
            <section className="tim">
                <a href="/" id={this.props.voted ? "liked" : "like"}>
                    <span onClick={this.props.toggleLike}/>
                </a>
                <a href="/" id="comment">
                    <span onClick={this.toggleFocus}/>
                </a>
                <a href="/" id={this.props.saved ? "saved" : "save"}>
                    <span onClick={this.props.toggleSave}/>
                </a>
            </section>
        );
    }
}

IconPostDetails.propTypes = {
    saved: PropTypes.bool.isRequired,
    toggleSave: PropTypes.func.isRequired,
};

export default IconPostDetails;