import React, {Component} from "react";
import PropTypes from "prop-types";

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Home page</h1>
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object
};

export default HomePage;