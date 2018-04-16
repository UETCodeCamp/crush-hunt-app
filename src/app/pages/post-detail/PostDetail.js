import React, {Component} from "react";
import PropTypes from "prop-types";

class PostDetail extends Component {
    render() {

        return (
            <div className="PostDetail">
                <h1>Post Detail</h1>
                <h2>hi anh em la Xuan </h2>
            </div>
        );
    }
}

PostDetail.propTypes = {
    history: PropTypes.object
};

export default PostDetail;