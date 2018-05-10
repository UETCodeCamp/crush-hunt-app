import React, {Component} from 'react';
import PropsTypes from "prop-types";
import { Link } from 'react-router-dom'
class ListPosts extends Component {
    createArrImg = () => {
        const {arrContents} = this.props;
        let listLi = [];
        for (let i = 0; i < arrContents.length; i++) {
            var linkto = "/posts/" + arrContents[i]._id;
            listLi.push(<Link key={i} to={linkto}><img src={arrContents[i].url} alt=""/></Link> );
        }

        return listLi;
    };

    render() {
        return (
            <div className="Main">
                <div className="Img">
                    {this.createArrImg()}
                </div>
            </div>
        );
    }
}

ListPosts.propTypes = {
    arrContents: PropsTypes.array
};

export default ListPosts;