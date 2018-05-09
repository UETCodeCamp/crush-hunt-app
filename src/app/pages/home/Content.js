import React, {Component} from 'react';
import PropTypes from "prop-types";
import {getProfilePicURL} from "../../../services/HomeServices";

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
                    <span className='avatar'
                          style={{backgroundImage:'url('+this.state.url+')'}}/>
                    <span className='user-name'>
                        {this.props.dataPost.owner.name}
                    </span>
                </div>
                <img src={this.props.dataPost.url} alt="pic"/>
            </div>
        );
    }
}

Content.propTypes = {
    dataPost: PropTypes.object,
};

export default Content;
