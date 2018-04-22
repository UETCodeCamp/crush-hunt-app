import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PostDetailPage.css";
import DashBoardPostDetails from "./DashBoardPostDetails";

class PostDetail extends Component {
    render() {
        return (
            <div id="post-detail-main">
                <div className="wrap">
                    <DashBoardPostDetails />
                </div>
            </div>
        );
    }
}
PostDetail.propTypes = {
    history: PropTypes.object
};

export default PostDetail;