import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./app/homepage/HomePage";
import PostDetail from "./app/detail/PostDetail";
import PageNotFound from "./app/page-not-found/PageNotFound";
import UploadPage from "./app/upload/UploadPage";
import Header from "./app/header/Header";
import LoginPage from "./app/login/LoginPage";
import RegisterPage from "./app/register/RegisterPage";

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header/>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/post/:id" component={PostDetail}/>
                    <Route path="/upload" component={UploadPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
