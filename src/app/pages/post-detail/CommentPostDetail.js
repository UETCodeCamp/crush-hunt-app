import React, {Component} from "react";

class CommentPostDetail extends Component {
    constructor(){
        super();
        this.textInput = React.createRef();
    }
    state = {
        text: "",
    };

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            this.props.handleSubmit(this.state.text);
            this.setState({text: ""});
            e.target.blur();
        }
    };
    focusOnText= () => {
        this.textInput.current.focus();
    }
  
    render() {
       if(this.props.focus && this.textInput.current) this.focusOnText();
    
        return (
            <section className="sec-form">
                <form className="form-comment">
                    <textarea autoComplete="off" autoCorrect="off"
                              placeholder="Add a comment..."
                              id="commentArea"
                              onChange={this.handleChange}
                              value={this.state.text}
                              onKeyDown={this.handleSubmit}
                              ref={this.textInput}
                    />
                </form>
            </section>
        );
    }
}

export default CommentPostDetail;