import React, { Component } from "react";
import HeaderPostDetail from "./HeaderPostDetail";
import Status from "./Status";
import LikePostDetails from "./LikePostDetails";
import IconPostDetails from "./IconPostDetails";
import CommentPostDetail from "./CommentPostDetail";
import DatePost from "./DatePost";
import PostOption from "./PostOption";
import { save, unsave, getPostDetail, vote, unvote, getPostComments, addComment ,deleteComment } from "../../../services/PostDetailServices"

class DashBoardPostDetails extends Component {
    state = {
        commentArray: [],
        focus: false,
        totalVotes: 0,
        totalComments: 0,
        scoreTrend: 0,
        created: "",
        title: "",
        url: "",
        owner: { name: "" },
        voted: false,
        saved: false,
        favID: "",
    };
    componentDidMount() {
        let voted = true;
        let saved = true;
        let arr = [];
        Promise.all([
            vote(this.props.id),
            save(this.props.id),
            getPostComments(this.props.id),
        ]).then((res) => {
            arr = res[2].data;
            if (res[0].success) {
                unvote(this.props.id);
                voted = false;
            }
            if (res[1].success) {
                console.log("UNSAVE");
                unsave(this.props.id, res[1].data._id).then((res) => {
                    console.log(res)
                })
                saved = false;
                this.setState({ favID: res[1]._id })
            }
        }).then(() => {
            getPostDetail(this.props.id).then(res => {

                console.log(arr);
                this.setState({
                    totalVotes: res.data.totalVotes,
                    totalComments: res.data.totalComments,
                    scoreTrend: res.data.scoreTrend,
                    created: res.data.created,
                    title: res.data.title,
                    url: res.data.url,
                    owner: res.data.owner,
                    voted: voted,
                    saved: saved,
                    commentArray: arr,
                })
                console.log(res.data);
            })
        })

    }
    toggleFollow = (e) => {
        e.preventDefault();
        this.setState({ follow: !(this.state.follow), focus: false });
    };

    toggleLike = (e) => {
        e.preventDefault();
        if (this.state.voted) {
            unvote(this.props.id).then(res => {
                this.setState({ voted: false, focus: false, totalVotes: this.state.totalVotes - 1 })
            })
        }
        else {
            vote(this.props.id).then(res => {
                this.setState({ voted: true, totalVotes: this.state.totalVotes + 1, focus: false })
            })
        }

    };

    toggleSave = (e) => {
        e.preventDefault();
        if (this.state.saved) {
            unsave(this.props.id, this.state.favID).then(res => {
                console.log("unsave", res);
                this.setState({ saved: false, focus: false })
            })
        }
        else {
            save(this.props.id).then(res => {
                console.log("save", res);
                this.setState({ saved: true, focus: false })
            })
        }
    };

    handleSubmit = (text) => {
        addComment(this.props.id, text).then(res => {
            getPostComments(this.props.id).then(res => {

                this.setState({ commentArray: res.data });
            })
        })
    }
    deleteComment = (commentID) => {
        deleteComment(this.props.id, commentID).then(res => {
            getPostComments(this.props.id).then(res => {
                console.log(res)
                this.setState({ commentArray: res.data });
            })
        })
    }
    toggleExist = (e) => {
        e.preventDefault();
        this.setState({ existed: !this.state.existed });
    };
    toggleFocus = () => {
        this.setState({ focus: true })
    }
    render() {

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
                            deleteComment={this.deleteComment}
                        />
                        <IconPostDetails
                            toggleLike={this.toggleLike}
                            toggleSave={this.toggleSave}
                            handleSubmit={this.handleSubmit}
                            toggleFocus={this.toggleFocus}
                            voted={this.state.voted}
                            saved={this.state.saved}
                        />
                        <LikePostDetails totalVotes={this.state.totalVotes} />
                        <DatePost created={this.state.created} />
                        <CommentPostDetail handleSubmit={this.handleSubmit} focus={this.state.focus} />
                        <PostOption existed={this.state.existed} toggleExist={this.toggleExist} />
                    </div>
                </article>
            </div>
        );
    }
}

export default DashBoardPostDetails;