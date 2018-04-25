import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PostDetail from "./pages/post-detail/PostDetail";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import UploadPage from "./pages/upload/UploadPage";
import Header from "./shared-components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ChangePassword from "./pages/accounts/password/ChangePassword";
import ResetPassword from "./pages/accounts/password/ResetPassword";

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/posts/:id" component={PostDetail}/>
                    <Route path="/upload" component={UploadPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/change" component={ChangePassword}/>
                    <Route path="/reset" component={ResetPassword}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
