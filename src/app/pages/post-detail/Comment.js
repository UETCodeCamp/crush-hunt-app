import React from "react"

class Comment extends React.Component {
    state = {
        text : "",
    }
    handleChange = (e) => {
            this.setState({text: e.target.value})
    }
    handleSubmit = (e) => {
         if(e.key === 'Enter'){
            this.props.handleSubmit(this.state.text)
            this.setState({text: ""})
         }
    }
    render() {
        return (
            <section className="sec-form">
                <form className="form-comment">
                    <textarea 
                    placeholder="Add a comment..." 
                    autoComplete="off" 
                    id="commentArea"
                    onChange={this.handleChange}
                    value={this.state.text}
                    onKeyDown={this.handleSubmit}
                    ></textarea>
                </form>
            </section>
        )
    }
}
export default Comment