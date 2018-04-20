import React , {Component} from 'react';
import moment from "moment";
import Content from "./Content";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class Post extends React.Component{
    constructor(){
        super();
        moment.updateLocale('en', {
            relativeTime: {
                future: "in %s",
                past: "%s trước",
                s: 'vài giây',
                ss: '%d giây',
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            }
        });
    }

    render(){

        return (
            <div className={'post'}>
                <Content dataPost={this.props.dataPost}/>
                <Comment dataPost={this.props.dataPost}/>
                <div className="time">
                {moment(this.props.dataPost.timePost).fromNow().toUpperCase()}
                </div>
                <CommentInput dataPost={this.props.dataPost}/>
            </div>
        );

    }

}

export  default  Post;