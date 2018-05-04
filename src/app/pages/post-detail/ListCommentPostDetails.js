import React, {Component} from "react"
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

class ListCommentPostDetails extends Component {
    deleteComment = (e) => {
          e.preventDefault();
          this.props.deleteComment(this.props.id);
    }
    render() {
        return (
            <li className="item">
                <Link to="/profile" className="user-name">{this.props.username}</Link>
                <span className="text">
                    <span>{this.props.comment}<span onClick={this.deleteComment} class={(this.props.title) ? "test" : "delete" }>x</span></span>
                </span>
            </li>
        );
    }
}

ListCommentPostDetails.propsTypes = {
    comment: PropTypes.string,
};

export default ListCommentPostDetails;