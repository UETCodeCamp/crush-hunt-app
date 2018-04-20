import React from "react"
import ListComment from "./ListComment.js"

class Status extends React.Component{

    render(){
        const commentArray = this.props.comment.map((text,i) => <ListComment key={"key"+i} comment={text} />) 

        return(
            <div className="status">
                <ul className="list">
                   {commentArray}

                </ul>
            </div>
        )
    }
}

export default Status