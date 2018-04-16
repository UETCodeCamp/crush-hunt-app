import React , {Component} from 'react';

class Comment extends React.Component{

    render(){

        return (
            <div>

                <div>
                    <span className={'like'}/>
                    <span className={'commnetExpand'}/>
                    <div className={'likesNumber'}>
                        <a  href=""/>
                    </div>
                </div>

                <div className={'listComment'}>
                    <ul />
                </div>

            </div>
        )
    }
}

export  default  Comment;