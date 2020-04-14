import React from 'react';
import './assets/scss/base.scss';
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FrontPage from "./components/pages/front-page/FrontPage";
import Posts from "./components/pages/posts/Posts";
import Footer from "./components/global/footer/Footer";
import SinglePost from "./components/pages/single/SinglePost";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/posts' component={Posts}/>
                    <Route path="/:post_slug" component={SinglePost}/>
                    <Route path="/" component={FrontPage}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
