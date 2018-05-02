import React, { Component } from "react";
import HeaderPostDetail from "./HeaderPostDetail";
import Status from "./Status";
import LikePostDetails from "./LikePostDetails";
import IconPostDetails from "./IconPostDetails";
import CommentPostDetail from "./CommentPostDetail";
import DatePost from "./DatePost";
import PostOption from "./PostOption";
import { save ,getPostDetail} from "../../../services/PostDetailServices"
import {handleTime} from "./helpers"

const array = ["Sample Comment 1", "Sample Comment 2", "3", "4", "5", "6"];

class DashBoardPostDetails extends Component {
    state = {
        commentArray: ["1", "2", "3", "4", "5", "6", "7", "8"],
        focus: true,
        totalVotes: 0,
        totalComments: 0,
        scoreTrend: 0,
        created: "",
        title: "",
        url: "",
        owner: {name:""}
        
    };
    componentDidMount(){
        getPostDetail(this.props.id).then(res => {
            const obj = res.data;
            this.setState({
                totalComments: obj.totalComments,
                totalVotes: obj.totalVotes,
                scoreTrend: obj.scoreTrend,
                created: obj.created,
                title: obj.title,
                url: obj.url,
                owner: obj.owner,
            })
            console.log(obj);
        });
    }
    toggleFollow = (e) => {
        e.preventDefault();
        this.setState({ follow: !(this.state.follow), focus: false });
    };

    toggleLike = (e) => {
        e.preventDefault();
        const likes = this.state.numberOfLike;
        this.setState({ numberOfLike: (this.state.liked) ? (likes - 1) : (likes + 1), liked: !this.state.liked, focus: false });
    };

    toggleSave = (e) => {
        e.preventDefault();
        this.setState({ saved: !this.state.saved, focus: false });
        save().then(obj => {
            console.log("save", obj);
        })
    };

    handleSubmit = (text) => {
        array.push(text);
        this.setState({ commentArray: array, focus: false });
   
    };

    toggleExist = (e) => {
        e.preventDefault();
        this.setState({ existed: !this.state.existed });
    };
    toggleFocus = () => {
        this.setState({ focus: true })
    }
    render() {
        handleTime();
        return (
            <div className="wrap1">
                <article id="post-detail-article">
                    <HeaderPostDetail
                        follow={this.state.follow}
                        toggleFollow={this.toggleFollow}
                        username={this.state.owner.name}
                    />
                    <div className="anh-post">
                        <img
                            src={this.state.url}
                            alt="unable to load" />
                    </div>

                    <div className="right_comment">
                        <Status 
                        comment={this.state.commentArray} 
                        title={this.state.title}
                        username={this.state.owner.name}
                        />
                        <IconPostDetails
                            liked={this.state.liked}
                            saved={this.state.saved}
                            comment={this.state.comment}
                            toggleLike={this.toggleLike}
                            toggleSave={this.toggleSave}
                            handleSubmit={this.handleSubmit}
                            toggleFocus={this.toggleFocus}
                           
                        />
                        <LikePostDetails numberOfLike={this.state.numberOfLike} />
                        <DatePost />
                        <CommentPostDetail handleSubmit={this.handleSubmit} focus={this.state.focus} />
                        <PostOption existed={this.state.existed} toggleExist={this.toggleExist} />
                    </div>
                </article>
            </div>
        );
    }
}

export default DashBoardPostDetails;