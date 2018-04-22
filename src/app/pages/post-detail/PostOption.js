import React from "react";

class PostOption extends React.Component {
    render() {
        return (
            <div className="three_dots">
                <button className="dis_play" id={this.props.existed ? "existed" : "exist"}>
                    <span onClick={this.props.toggleExist}/>
                </button>
            </div>
        )
    }
}

export default PostOption;