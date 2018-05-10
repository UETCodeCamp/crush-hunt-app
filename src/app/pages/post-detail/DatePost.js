import React, {Component} from "react";
import { handleTime} from "../../../services/PostDetailServices"
class DatePost extends Component {
    render() {
        const date = handleTime(this.props.created);
        return (
            <div className="day_ago">
                <a>
                    <time className="time">{date} ago</time>
                </a>
            </div>
        );
    }
}

export default DatePost;