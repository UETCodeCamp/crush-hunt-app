import React from "react"

class Icon extends React.Component {
    toggleFocus = (e) => {  
        e.preventDefault();
        document.getElementById("commentArea").focus();
     
    }
    render() {
        return (
            <section className="tim">
                <a href="/" id={this.props.liked ? "liked" : "like"}>
                    <span onClick={this.props.toggleLike} />
                </a>
                <a href="/" id="comment">
                    <span onClick={this.toggleFocus} />
                </a>
                <a href="/" id={this.props.saved ? "saved" : "save"}>
                    <span onClick={this.props.toggleSave} />
                </a>
            </section>
        )
    }
}

export default Icon 