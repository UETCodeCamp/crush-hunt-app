import React , {Component} from 'react';


class CommentInput extends  React.Component{

    render(){

        return(
            <div className={'commentForm'}>
                <form >
                    <input type="text" className={'commentInput'} placeholder={'Nhập bình luận của bạn...'}/>
                    <button><i className="fa fa-paper-plane" aria-hidden="true"/></button>
                </form>
            </div>
        );
    }

}

export  default CommentInput;