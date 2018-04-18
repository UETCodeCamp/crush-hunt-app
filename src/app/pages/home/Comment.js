import React , {Component} from "react";


class Comment extends React.Component{

    state = {
        commentsShow:[],
        isShowComment:false,
    }

    render(){


        const listComent = this.state.commentsShow.map((data)=>{
            return <div className={'comment'} ><span className={'userComment'}>{data.userNameComment}</span>{data.commentText}</div>
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
                <div className={'loadComment'} onClick={this.loadComment} id={this.props.dataPost.userName}>
                    Load more comments...
                </div>
                <div className="postText">
                    {this.props.dataPost.postText}
                </div>
                <div className={'commentList'}>
                    {listComent}
                </div>
            </div>
        );
    }

    loadComment= (e)=>{
        if(!this.state.isShowComment){
            this.setState({
                commentsShow:this.props.dataPost.comments,
                isShowComment:true,
            })
            document.getElementById(this.props.dataPost.userName).innerText = 'Hiden comment...';
        }else{
            this.setState({
                commentsShow:this.props.dataPost.topComments,
                isShowComment:false,
            })
            document.getElementById(this.props.dataPost.userName).innerText = 'Load more comments...';
        }

    }
}

export  default  Comment;