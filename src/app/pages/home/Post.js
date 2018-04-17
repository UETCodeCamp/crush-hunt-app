import React , {Component} from 'react';
import Content from "./Content";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class Post extends React.Component{


    render(){

        return (
            <div className={'post'}>
                <Content dataPost={this.props.dataPost}/>
                <Comment dataPost={this.props.dataPost}/>
                <CommentInput dataPost={this.props.dataPost}/>
            </div>
        );

    }

}

export  default  Post;