import React, {Component} from 'react';


class CommentInput extends Component {

    render() {

        return (
            <div className={'commentForm'}>
                <form>
                    <input id={this.props.dataPost.idPost} type="text" className={'commentInput'} placeholder={'Nhập bình luận của bạn...'}/>
                    <button onClick={this.summitCommnetInput}><span className="pushComment"/></button>
                </form>
            </div>
        );
    }

    summitCommnetInput = (e)=>{
        e.preventDefault();
        const input = document.getElementById(this.props.dataPost.idPost).value;
        this.props.summitComment(input,this.props.dataPost.idPost);
        document.getElementById(this.props.dataPost.idPost).value = '';
    }
}

export default CommentInput;