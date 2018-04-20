import React from "react"
import Header from "./Header"
import Status from "./Status"
import Like from "./Like"
import Icon from "./Icon"
import Comment from "./Comment"
import PostDate from "./PostDate"
import PostOption from "./PostOption"
class DashBoard extends React.Component{

    state = {
        follow: false,
        liked:true,
        saved:false,
        comment:false,
    }
    toggleFollow = () => {
        this.setState({follow: !(this.state.follow)})
    }
    toggleLike = (e) => {
        e.preventDefault();
        this.setState({liked: !this.state.liked})
    }
    toggleSave = (e) => {
        e.preventDefault();
        this.setState({saved: !this.state.saved})
    }
    render(){
        return(
            <article id="post-detail-article">
                <div className="wrap1">
                    <Header
                     follow={this.state.follow}
                     toggleFollow={this.toggleFollow}
                     />
                    <Status/>
                    <Icon 
                        liked={this.state.liked}
                        saved={this.state.saved}
                        comment={this.state.comment}
                        toggleLike={this.toggleLike}
                        toggleSave={this.toggleSave}
                    />
                    <Like/>
                    <PostDate/>
                    <Comment/>
                    <PostOption/>
                </div>
            </article>

        )
    }
}

export default DashBoard