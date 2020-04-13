import React from 'react';
import './assets/scss/base.scss';
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import FrontPage from "./components/pages/front-page/FrontPage";
import Posts from "./components/pages/posts/Posts";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/posts'>
                    <Posts/>
                </Route>
                <Route path="/">
                    <FrontPage/>
                </Route>
            </Switch>
        </Router>
        // <FrontPage/>
    );
}

export default App;
