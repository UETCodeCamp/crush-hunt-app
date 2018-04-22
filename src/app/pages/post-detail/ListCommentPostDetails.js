import React from "react"
import {Link} from "react-router-dom"

class ListCommentPostDetails extends React.Component {
    render() {
        return (
            <li className="item">
                <Link to="/profile" className="user-name">OppaGou</Link>
                <span className="text">
                    <span>{this.props.comment}</span>
                </span>
            </li>

        )
    }
}

export default ListCommentPostDetails