import React , {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import Link from "react-router-dom/es/Link";

class Content extends  React.Component{


    render(){

        return(
            <div>
                <div className={'userDetails'}>
                    <span className={'avatar'} style={{ backgroundImage: "url('http://d38we5ntdyxyje.cloudfront.net/820641/profile/CRPQIVAX_avatar_medium_square.jpg')" }}/>
                    <span className={'userName'}>
                        {this.props.dataPost.userName}
                    </span>
                </div>
                <img src={this.props.dataPost.imgSrc}/>
            </div>
        );
    }

}

export  default Content;
