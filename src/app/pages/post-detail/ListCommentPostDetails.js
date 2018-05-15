import React, { Component } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

class ListCommentPostDetails extends Component {
    deleteComment = (e) => {
        e.preventDefault();
        this.props.deleteComment(this.props.id);
    }
    render() {
        if (this.props.title === false) {
            const visible = (this.props.owner === this.props.currentUser._id)
            return (
                <li className="item">
                    <Link to="/profile" className="user-name">{this.props.username}</Link>
                    <span className="text">
                        <span className="text_real">{this.props.comment}</span>
                    </span>
                    <span onClick={this.deleteComment} className={(visible) ? "delete" : "hide"}>&#x2715;</span>
                </li>
            );
        }
        else{
            return (
                <li className="item">
                    <Link to="/profile" className="user-name">{this.props.username}</Link>
                    <span className="text">
                        <span>{this.props.comment}</span>
                    </span>
                </li>
            );
        }
    }
}

ListCommentPostDetails.propsTypes = {
    comment: PropTypes.string,
};

export default ListCommentPostDetails;