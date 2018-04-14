import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./app/homepage/HomePage";
import PostDetail from "./app/detail/PostDetail";
import PageNotFound from "./app/page-not-found/PageNotFound";
import UploadPage from "./app/upload/UploadPage";

class App extends Component {
    render() {
        return (
            <div id="app">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/post/:id" component={PostDetail}/>
                    <Route path="/upload" component={UploadPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
