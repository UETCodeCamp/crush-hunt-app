import React, {Component} from "react";


class Comment extends React.Component {

    state = {
        commentsShow: this.props.dataPost.topComments,
        isShowComment: false,
    }

    render() {


        const listComent = this.state.commentsShow.map((data) => {
            return <div className={'comment'}><span
                className={'userComment'}>{data.userNameComment}</span>{data.commentText}</div>
        });

        return (
            <div>
                <div className="likeButton">
                    <span className="unlike"/>
                    <span className="comment"/>
                </div>
                <div className="likeText">
                    {this.props.dataPost.likeText}
                </div>
                <div className="postText">
                    {this.props.dataPost.postText}
                </div>
                <div className={'commentList'}>
                    {listComent}
                </div>
                <div className={'loadComment'} onClick={this.loadComment} id={this.props.dataPost.userName}>
                    Load more comments...
                </div>
            </div>
        );
    }

    componentDidMount() {

        const comments = this.props.dataPost.comments;
        const topComments = this.props.dataPost.topComments;
        const id = this.props.id;
        const isShowComment = this.state.isShowComment;
        if (comments.length === topComments.length && !isShowComment) {
            this.setState({
                commentsShow: comments,
                isShowComment: false,
            })
            document.getElementsByClassName("post")[id].getElementsByClassName("loadComment")[0].style.display="none";
        }

    }

    loadComment = () => {
        const comments = this.props.dataPost.comments;
        const topComments = this.props.dataPost.topComments;
        const id = this.props.id;
        const isShowComment = this.state.isShowComment;
        /*if(comments.length === topComments.length && !isShowComment){
            this.setState({
                commentsShow: [],
                isShowComment: false,
            })
            document.getElementById(id).innerText = 'Load more comments...';
        }*/
        if (!isShowComment) {
            this.setState({
                commentsShow: comments,
                isShowComment: true,
            })
            document.getElementsByClassName("post")[id].getElementsByClassName("loadComment")[0].innerText = 'Hiden comment...';
        } else {
            if (comments.length !== topComments.length) {
                this.setState({
                    commentsShow: topComments,
                    isShowComment: false,
                })
                document.getElementsByClassName("post")[id].getElementsByClassName("loadComment")[0].innerText = 'Load more comments...';
            }
            else {
                document.getElementsByClassName("post")[id].getElementsByClassName("loadComment")[0].style.display="none";
            }

        }

    }
}

export default Comment;