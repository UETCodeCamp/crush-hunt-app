import React from "react"
import OptionHidden from "./OptionHidden";


class PostOption extends React.Component {
    render() {
        return (
            <div className="bacham" >
                <button className="hienthi" id={this.props.existed ? "existed" : "exist"}>
                    <span onClick={this.props.toggleExist}/>
                </button>

            </div>
        )
    }
}

export default PostOption