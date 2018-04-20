import React from "react"
import ListComment from "./ListComment.js"
class Status extends React.Component {

    render() {
        let comments = this.props.comment;
        comments = comments.map((text) => { return <ListComment comment={text} /> })
        return (
            <div className="status">
                <ul className="list">
                    {comments}
                </ul>
            </div>
        )
    }
}

export default Status