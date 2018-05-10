import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

class SavedPosts extends Component {
    createArrImg = () => {
        const {arrSaves} = this.props;
        let listLi = [];
        for (let i = 0; i < arrSaves.length; i++) {
            var linkto = "/posts/" + arrSaves[i]._id;
            listLi.push(<Link key={i} to={linkto}><img src={arrSaves[i].url} alt=""/></Link> );
        }

        return listLi;
    };

    render() {
        return (
            <div className="Main">
                <div className="Ramrm">
                    <span>Chỉ mình bạn có thể xem mục mình đã lưu</span>
                </div>
                <div className="ImagePost">
                    {this.createArrImg()}
                </div>
            </div>
        );
    }
}

SavedPosts.propTypes = {
    arrSaves: PropTypes.array,
};

export default SavedPosts;