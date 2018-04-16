import React , {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Link from "react-router-dom/es/Link";



class Content extends  React.Component{


    render(){



        return(
            <div>
                <header className={'userDetails'}>
                    <span>
                        <img src="" alt=""/>
                    </span>
                    <span>
                        <Link className={'userLinkPost'} to={}/>
                    </span>
                </header>
                <div className={'imgPost'}>
                    <img src="" alt=""/>
                </div>
            </div>
        );
    }

}

export  default Content;