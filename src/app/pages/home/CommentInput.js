import React , {Component} from 'react';


class CommentInput extends  React.Component{

    render(){

        return(
            <div>
                <form >
                    <input type="text" className={'commentInput'}/>
                    <input type="buttonSummit" className={'addCommnet'}/>
                </form>
            </div>
        )
    }

}

export  default CommentInput;