import React, {Component} from 'react';
import PropTypes from "prop-types";

class Content extends Component {
    render() {
        return (
            <div>
                <div className='user-details'>
                    <span className='avatar'
                          style={{backgroundImage: "url('http://d38we5ntdyxyje.cloudfront.net/820641/profile/CRPQIVAX_avatar_medium_square.jpg')"}}/>
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
