import React, { Component } from "react";
import PropTypes from "prop-types";
import ListCommentPostDetails from "./ListCommentPostDetails";
import withAuth from "../../shared-components/withAuth";

class Status extends Component {
    state = {
        numberOfComments: 7
    };

    loadMoreComment = () => {
        this.setState({ numberOfComments: this.state.numberOfComments + 7 });
    };

    render() {
        const currentUser = this.props.currentUser;

        const commentArray = this.props.comment.map((obj, i) => {
            console.log("obj",obj);
            return (
                <ListCommentPostDetails
                    key={"key" + i}
                    comment={obj.content}
                    username={obj.owner.name}
                    id={obj._id}
                    owner={obj.owner}
                    deleteComment={this.props.deleteComment}
                    currentUser={currentUser}
                    title={false}
                />
            );
        });

        const displayComment = [];
        for (let i = commentArray.length - this.state.numberOfComments; i < commentArray.length; i++) {
            displayComment.push(commentArray[i]);
        }

        const loadCommentElement = (this.props.comment.length > this.state.numberOfComments) ?
            <span onClick={this.loadMoreComment}>View more comments</span> : null;

        return (
            <div className="status">
                <ul className="list">
                    <ListCommentPostDetails
                        comment={this.props.title}
                        username={this.props.username}
                        title={true}
                    />
                    {loadCommentElement}
                    {displayComment}
                </ul>
            </div>
        );
    }
}

Status.propTypes = {
    comment: PropTypes.array,
};

export default withAuth(Status);

