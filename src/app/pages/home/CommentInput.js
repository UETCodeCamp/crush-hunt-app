import React, {Component} from 'react';


class CommentInput extends Component {

    render() {

        return (
            <div className={'commentForm'}>
                <form>
                    <input type="text" className={'commentInput'} placeholder={'Nhập bình luận của bạn...'}/>
                    <button><span className="pushComment"/></button>
                </form>
            </div>
        );
    }

}

export default CommentInput;