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
    }
    toggleFollow = () => {
        this.setState({follow: !(this.state.follow)})
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
                    <Icon/>
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