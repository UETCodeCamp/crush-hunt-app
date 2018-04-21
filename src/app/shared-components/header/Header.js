import React, {Component} from "react";
import {Link} from "react-router-dom";
import {addAuthListener, isAuthenticated, removeAuthListener, setAuthState} from "../../../services/AuthServices";
import "./Header.css";

class Header extends Component {
    state = {
        auth: isAuthenticated(),
    };

    componentDidMount() {
        addAuthListener(this._handleOnAuthChange);
    }

    componentWillUnmount() {
        removeAuthListener(this._handleOnAuthChange);
    }

    _handleOnAuthChange = () => {
        this.setState({
            auth: isAuthenticated(),
        })
    };

    render() {
        const {auth} = this.state;

        return (
            <div className="Header">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/assets/images/logo.png" width="50" height="50" alt="Logo"/>
                        </Link>

                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav ml-auto">
                                {
                                    !auth &&
                                    <li className="nav-item">
                                        <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Login</Link>
                                    </li>
                                }
                                {
                                    auth &&
                                    <li onClick={this._handleClickLogout} className="nav-item">
                                        <a className="btn btn-outline-success my-2 my-sm-0">Logout</a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    _handleClickLogout = () => {
        setAuthState({
            accessToken: null
        });
    }
}

export default Header;