import React, {Component} from "react";
import {addAuthListener, getCurrentUser, isAuthenticated, removeAuthListener} from "../../services/AuthServices";

export default (ComposedComponent) => class WithAuthentication extends Component {
    static displayName = 'withAuthentication(' + (ComposedComponent.displayName || ComposedComponent.name) + ')';

    state = {
        auth: isAuthenticated(),
        user: getCurrentUser(),
    };

    _mounted = false;

    componentDidMount() {
        this._mounted = true;
        addAuthListener(this._handleOnAuthChange);
    }

    componentWillUnmount() {
        this._mounted = false;
        removeAuthListener(this._handleOnAuthChange);
    }

    _handleOnAuthChange = () => {
        if (!this._mounted) {
            return;
        }

        this.setState({
            auth: isAuthenticated(),
            user: getCurrentUser()
        });
    };

    render() {
        const {auth, user} = this.state;
        const {props} = this;

        return <ComposedComponent currentUser={user} {...props} auth={auth}/>
    }
}