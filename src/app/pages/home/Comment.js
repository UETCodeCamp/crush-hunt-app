import React, {Component} from "react";


class Comment extends Component {

    state = {
        commentsShow: this.props.dataPost.topComments,
        isShowComment: false,
        isLengthCommentEqualTop: (this.props.dataPost.topComments.length === this.props.dataPost.comments.length),
        contentLoadComment: 'Tải thêm bình luận ...',
        isLiked: false,
    }

    render() {

        const listComment = this.state.commentsShow.map((data, index) => {
            return <div className={'comment'} key={index}><span
                className={'userComment'}>{data.userNameComment}</span>{data.commentText}</div>
        });

        const loadCommnetButton = this.loadCommentButton();

        return (
            <div>
                <div className="likeButton">
                    <span className={(this.state.isLiked)?'like':'unlike'} onClick={this.likeButton}/>
                    <span className="comment" onClick={this.commentFocus}/>
                </div>
                <div className="likeText">
                    {this.props.dataPost.likeText}
                </div>
                <div className="postText">
                    {this.props.dataPost.postText}
                </div>
                <div className={'commentList'}>
                    {listComment}
                </div>
                <div>
                    {loadCommnetButton}
                </div>

            </div>
        );
    }

    loadCommentButton = () => {
        if (!this.state.isLengthCommentEqualTop) {
            return (
                <div className={'loadComment'} onClick={this.loadComment}>
                    {this.state.contentLoadComment}
                </div>
            );
        } else {
            return null;
        }
    }

    componentDidMount() {

    }


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

    }

    likeButton = ()=>{
        if(!this.state.isLiked){
            this.props.likeButton(true,this.props.dataPost.idPost);
            this.setState({
                isLiked:true
            });
        }
        else{
            this.props.likeButton(false,this.props.dataPost.idPost);
            this.setState({
                isLiked:false
            });
        }
    }

    commentFocus=()=>{
        document.getElementById(this.props.dataPost.idPost).focus();
    }
}

export default Comment;