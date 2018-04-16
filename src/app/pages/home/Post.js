import React , {Component} from 'react';
import Content from "./Content";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class Post extends React.Component{

    render(){

        return <div>
            <Content/>
            <Comment/>
            <CommentInput/>
        </div>

    }

}

export  default  Post;