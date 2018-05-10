import React, {Component} from 'react';
import PropTypes from "prop-types";
import * as ReactDOM from "react-dom";

class CommentInput extends Component {

    componentDidMount(){
        this.props.getRefs(this.refs);
    }
    render() {
        return (
            <div className={'comment-form'}>
                <form>
                    <input id={this.props.dataPost.idPost} type="text" className={'comment-input'}
                           placeholder={'Nhập bình luận của bạn...'} ref={'inputComment'}/>
                    <button onClick={this._submitCommentInput}><span className="push-comment"/></button>
                </form>
            </div>
        );
    }

    _submitCommentInput = (e) => {
        e.preventDefault();
        const input = ReactDOM.findDOMNode(this.refs.inputComment).value;
        this.props.submitComment(input, this.props.dataPost.idPost);
        ReactDOM.findDOMNode(this.refs.inputComment).value='';
    }
}

CommentInput.propTypes = {
    dataPost: PropTypes.object,
    submitComment: PropTypes.func.isRequired,
};

export default CommentInput;