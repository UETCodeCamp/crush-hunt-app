import React, {Component} from "react";
import PropTypes from "prop-types";
import "./PostDetailPage.css";
import DashBoardPostDetails from "./DashBoardPostDetails";
import Footer from "../../shared-components/footer/Footer"

class PostDetail extends Component {
    render() {
        const {match} = this.props;
        const {id} = match.params;

        return (
            <div>
                <div id="post-detail-main">
                    <div className="wrap">
                        <DashBoardPostDetails id={id}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

PostDetail.propTypes = {
    history: PropTypes.object,
};

export default PostDetail;