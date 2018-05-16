import React, {Component} from 'react';
import PropTypes from "prop-types";
import {getProfilePicURL} from "../../../services/HomeServices";
import {Link} from "react-router-dom";

class Content extends Component {
    state = {
        url:''
    }

    componentDidMount(){

        getProfilePicURL(this.props.dataPost.owner._id)
            .then(data=>{
                this.setState({
                    url:data,
                })
            })

    }
    render() {

        return (
            <div>
                <div className='user-details'>
                    <Link to={'/profile'}>
                        <span className='avatar'
                          style={{backgroundImage:'url('+this.state.url+')'}}/>
                    </Link>
                    <span className='user-name'>
                        {this.props.dataPost.owner.name}
                    </span>
                </div>
                <Link to={'/posts/' + this.props.dataPost._id}>
                    <img src={this.props.dataPost.url} alt="pic"/>
                </Link>
            </div>
        );
    }
}

Content.propTypes = {
    dataPost: PropTypes.object,
};

export default Content;
