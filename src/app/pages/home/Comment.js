import React, {Component} from "react";
import PropTypes from "prop-types";
import {likePost, unlikePost} from "../../../services/HomeServices";

class Comment extends Component {
    state = {
        commentsShow: this.props.dataPost.topComments,
        isShowComment: false,
        contentLoadComment: 'Tải thêm bình luận ...',
        isLiked: false,
        totalVote:this.props.dataPost.totalVotes,
    };

    render() {

       /* const listComment = this.state.commentsShow.map((data, index) => {
            return <div className='comment' key={index}><span
                className= 'user-comment' >{data.userNameComment}</span>{data.commentText}</div>
        });*/

        const loadCommentButton = this.loadCommentButton();

        return (
            <div>
                <div className = "like-button">
                    <span className={(this.state.isLiked) ? 'like' : 'unlike'} onClick={this.likeButton}/>
                    <span className="comment" onClick={this.commentFocus}/>
                </div>
                <div className = "like-text">
                    {this.state.totalVote+' '}
                     lượt thích.
                </div>
                <div className = "post-text">
                    {this.props.dataPost.title}
                </div>
            </div>
        );
    }

    loadCommentButton = () => {
        if (!this.state.isLengthCommentEqualTop) {
            return (
                <div className= 'load-comment'  onClick={this.loadComment}>
                    {this.state.contentLoadComment}
                </div>
            );
        } else {
            return null;
        }
    };

    loadComment = () => {
        const comments = this.props.dataPost.comments;
        const topComments = this.props.dataPost.topComments;
        const isShowComment = this.state.isShowComment;

        if (!isShowComment) {
            this.setState({
                commentsShow: comments,
                isShowComment: true,
                contentLoadComment: "Ẩn đi một số bình luận..."
            });
        }
        else {
            this.setState({
                commentsShow: topComments,
                isShowComment: false,
                contentLoadComment: 'Tải thêm bình luận ...'
            });
        }
    };

    likeButton = () => {
        if (!this.state.isLiked) {
            likePost(this.props.dataPost.id);
            this.setState({
                isLiked: true,
                totalVote: this.state.totalVote + 1,
            });
        } else {
            unlikePost(this.props.dataPost.id);
            //this.props.likeButton(false, this.props.dataPost.idPost);
            this.setState({
                isLiked: false,
                totalVote: this.state.totalVote - 1,
            });
        }
    };

    commentFocus = () => {
        this.props.refsCommentInput.inputComment.focus();
    }
}

Comment.propsTypes = {
    dataPost: PropTypes.object.isRequired,
    likeButton: PropTypes.func.isRequired,
};

export default Comment;