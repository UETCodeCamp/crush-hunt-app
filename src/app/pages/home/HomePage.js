import React, {Component} from "react";
import PropTypes from "prop-types";
import "./HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Home page</h1>
                ahihi do ngok
                <p>zì em íu đúi akjdhakjdhkajhd</p>
                muôn đời em zẫn íu đúi.
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object
};

export default HomePage;