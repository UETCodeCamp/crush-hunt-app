import React from "react"
import Header from "./Header"
import Status from "./Status"
import Like from "./Like"
import Icon from "./Icon"
import Comment from "./Comment"
import PostDate from "./PostDate"
import PostOption from "./PostOption"
const array = [];
class DashBoard extends React.Component{

    state = {
        follow: false,
        liked:true,
        saved:false,
        commentArray: [],
        numberOfLike: 1,
    
       

    }
    toggleFollow = (e) => {
        e.preventDefault();
        this.setState({follow: !(this.state.follow)})
    }
    toggleLike = (e) => {
        e.preventDefault();
        var likes = this.state.numberOfLike;
        this.setState({numberOfLike: (this.state.liked) ? (likes-1) : (likes+1),liked: !this.state.liked})
    }
    toggleSave = (e) => {
        e.preventDefault();
        this.setState({saved: !this.state.saved})
    }

    handleSubmit = (text) => {
         array.push(text)
         this.setState({commentArray:array})
    }
    toggleExist = (e) => {
        e.preventDefault();
        this.setState({existed: !this.state.existed})
    }
    render(){
        return(
            <article id="post-detail-article">
                <div className="wrap1">
                    <Header
                     follow={this.state.follow}
                     toggleFollow={this.toggleFollow}
                     />
                    <Status comment={this.state.commentArray}/>
                    <Icon 
                        liked={this.state.liked}
                        saved={this.state.saved}
                        comment={this.state.comment}
                        toggleLike={this.toggleLike}
                        toggleSave={this.toggleSave}
                        handleSubmit={this.handleSubmit}
                    />
                    <Like numberOfLike={this.state.numberOfLike}/>
                    <PostDate/>
                    <Comment handleSubmit={this.handleSubmit}/>
                    <PostOption/>
                
                </div>
            </article>

        )
    }
}

export default DashBoard