import React, {Component} from "react";
import PropTypes from "prop-types";

class Comment extends Component {
    state = {
        commentsShow: this.props.dataPost.topComments,
        isShowComment: false,
        isLengthCommentEqualTop: (this.props.dataPost.topComments.length === this.props.dataPost.comments.length),
        contentLoadComment: 'Tải thêm bình luận ...',
        isLiked: false,
    };

    render() {
        const listComment = this.state.commentsShow.map((data, index) => {
            return <div className='comment' key={index}><span
                className= 'user-comment' >{data.userNameComment}</span>{data.commentText}</div>
        });

        const loadCommentButton = this.loadCommentButton();

        return (
            <div>
                <div className = "like-button">
                    <span className={(this.state.isLiked) ? 'like' : 'unlike'} onClick={this.likeButton}/>
                    <span className="comment" onClick={this.commentFocus}/>
                </div>
                <div className = "like-text">
                    {this.props.dataPost.likeText}
                </div>
                <div className = "post-text">
                    {this.props.dataPost.postText}
                </div>
                <div className = 'comment-list'>
                    {listComment}
                </div>
                <div>
                    {loadCommentButton}
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
            this.props.likeButton(true, this.props.dataPost.idPost);
            this.setState({
                isLiked: true
            });
        } else {
            this.props.likeButton(false, this.props.dataPost.idPost);
            this.setState({
                isLiked: false
            });
        }
    };

    commentFocus = () => {
        //@todo use ref instead of `document.getElementById`. See more: https://reactjs.org/docs/refs-and-the-dom.html
        this.props.refsCommentInput.inputComment.focus();
    }
}

Comment.propsTypes = {
    dataPost: PropTypes.object.isRequired,
    likeButton: PropTypes.func.isRequired,
};

export default Comment;