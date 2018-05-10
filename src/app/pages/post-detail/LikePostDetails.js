import React, {Component} from "react";
import PropTypes from "prop-types";

class LikePostDetails extends Component {
    render() {
        return (
            <section className="like_number">
                <div>
                    <a>
                        <span>{this.props.totalVotes} </span>
                        {this.props.totalVotes === 1 || this.props.totalVotes === 0 ? "like" : "likes"}
                    </a>
                </div>
            </section>
        );
    }
}

LikePostDetails.propTypes = {
    numberOfLike: PropTypes.number,
};

export default LikePostDetails;