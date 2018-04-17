import React , {Component} from "react";


class Comment extends React.Component{

    render(){

        const listComent = this.props.dataPost.listComments.map((data)=>{
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
                <div className="postText">
                    {this.props.dataPost.postText}
                </div>
                <div className={'commentList'}>
                    {listComent}
                </div>
            </div>
        );
    }
}

export  default  Comment;