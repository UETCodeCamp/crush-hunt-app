import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/assets/images/logo.png" width="50" height="50" alt="Logo"/>
                        </Link>

                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;