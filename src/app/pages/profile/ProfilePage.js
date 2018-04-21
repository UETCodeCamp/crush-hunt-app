import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ProfilePage.css"
import Header from "./Header.js";
import NavSavePost from "./NavSavePost.js";
import Main from "./Main.js";
import Footer from "../../shared-components/footer/Footer.js";
//import {Header} from "../../shared-components/header/Header.js";

class ProfilePage extends Component {
    state = {
        gotoSaved: false,
        arrContents: [],
        arrSaves: []
    }

    componentDidMount() {
        this.setState({
            arrContents: [
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/29982893_192101101598820_8005835844284856753_o.jpg?_nc_cat=0&oh=92ff0352c3233bbee9e63119e4c4c88f&oe=5B65838A",
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/29983374_192101081598822_5963462108342509740_o.jpg?_nc_cat=0&oh=6f05fc8519f3230a5e33737455780a67&oe=5B633B45",
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/28699202_169200180555579_6528913560884480509_o.jpg?_nc_cat=0&oh=88cfa26d6e30ba233da56aa4231b5250&oe=5B67AAF9"
            ],
            arrSaves: [
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/29982893_192101101598820_8005835844284856753_o.jpg?_nc_cat=0&oh=92ff0352c3233bbee9e63119e4c4c88f&oe=5B65838A",
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/29983374_192101081598822_5963462108342509740_o.jpg?_nc_cat=0&oh=6f05fc8519f3230a5e33737455780a67&oe=5B633B45",
                    "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/28699202_169200180555579_6528913560884480509_o.jpg?_nc_cat=0&oh=88cfa26d6e30ba233da56aa4231b5250&oe=5B67AAF9"
            ]
        })
    }

    render() {
        return (
            <div className="ProfilePage">

                <div class="Wapper">
                    <Header />
                    <NavSavePost gotoSaved={this.state.gotoSaved} changeGotoSaved={this.changeGotoSaved} />
                    <Main gotoSaved={this.state.gotoSaved} arrContents={this.state.arrContents} arrSaves={this.state.arrSaves} />
                    <Footer/>
                </div>

            </div>
        );
    }

    changeGotoSaved = (event, gotoSavedTemp) => {
        this.setState({ gotoSaved: gotoSavedTemp })
    }
}

ProfilePage.propTypes = {
    any: PropTypes.any
};

export default ProfilePage;

