import React from 'react';
import './assets/scss/base.scss';
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FrontPage from "./components/pages/front-page/FrontPage";
import Posts from "./components/pages/posts/Posts";
import Footer from "./components/global/footer/Footer";

function App() {
    return (
        <>
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
            <Footer/>
        </>
    );
}

export default App;
