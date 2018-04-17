import React, {Component} from "react";
import PropTypes from "prop-types";
import Post from "./Post"
import Footer from "./Footer"
import Nav from "./Nav"
class PostDetail extends Component {
    render() {
        return (
        <div id="post-detail main">
          <Nav/>
          <Post/>
          <Footer/>
        </div>
       );
    }
}
PostDetail.propTypes = {
    history: PropTypes.object
};

export default PostDetail;