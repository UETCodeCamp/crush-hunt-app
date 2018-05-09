import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./HomePage.css";
import Post from "./Post";
import TopPost from "./TopPost";
import { dataTrending } from "./../../../services/HomeServices";
import {
    addComment,
    dataFresh,
    dataHot,
    deleteComment,
    getComments, getPostDetail, getProfilePicURL,
    likePost,
    unlikePost
} from "../../../services/HomeServices";
import {getAuthState} from "../../../services/AuthServices";
import Redirect from "react-router-dom/es/Redirect";

class HomePage extends Component {
    state = {
      trendingPost:[],
       isLogin:false,
    }
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        const isLogin = getAuthState();
        dataTrending(1, 10).then(data => {
            console.log(data.data);
            this.setState({
                isLogin:isLogin.accessToken,
                trendingPost:data.data,
            })
        });
    }

    componentDidUpdate(){

    }

    render() {
        console.log(this.state.trendingPost);
        const listPostData = this.state.trendingPost.map((e, index) => {
            return (
                <Post dataPost={e}
                    key={index}
                    id={e.id}
                    submitComment={this._handleSummitComment}
                    likeButton={this._handleLike} />
            );
        });

        const isLogin = this.state.isLogin;
        if(isLogin !== null){
            return (
                <div className='home-page'>
                    <div className="home-display">
                        <div className="list-post">
                            {listPostData}
                        </div>
                        <TopPost />
                    </div>
                </div>
            );
        }
        else {
            return(<Redirect to={'/login'}/>);
        }

    }

    _handleSummitComment = (e, t) => {
        /*for (let i = 0; i < this.state.listPost.length; i++) {
            if (t === this.state.listPost[i].idPost) {
                this.state.listPost[i].topComments.push({
                    userNameComment: 'testsummit',
                    commentText: e
                });
                this.state.listPost[i].comments.push({
                    userNameComment: 'testsummit',
                    commentText: e
                });
            }
        }

        this.setState(this.state);*/
    };

    _handleLike = (e, t) => {
        /*for (let j = 0; j < this.state.listPost.length; j++) {
            if (t === this.state.listPost[j].idPost) {
                if (e) {
                    for (let i = 0; i < this.state.listPost[j].likeText.length; i++) {
                        if (this.state.listPost[j].likeText[i] === ' and you like this') {
                            return;
                        }
                    }
                    this.state.listPost[j].likeText.push(' and you like this');
                    this.setState(this.state);
                }
                else {
                    for (let k = 0; k < this.state.listPost[j].likeText.length; k++) {
                        if (this.state.listPost[j].likeText[k] === ' and you like this') {
                            this.state.listPost[j].likeText.slice(k, 1);
                            this.setState(this.state);
                        }
                    }
                }
            }

        }*/
    }
}

HomePage.propTypes = {
    history: PropTypes.object,
};

export default HomePage;