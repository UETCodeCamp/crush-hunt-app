import React from "react"

class LikePostDetails extends React.Component {
    render() {
        return (
            <section className="like_number">
                <div>
                    <a>
                        <span>{this.props.numberOfLike} </span>
                        {this.props.numberOfLike === 1 || this.props.numberOfLike === 0 ? "like" : "likes"}
                    </a>
                </div>
            </section>
        )
    }
}

export default LikePostDetails