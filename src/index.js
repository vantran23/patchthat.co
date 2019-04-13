import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'gestalt/dist/gestalt.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from './components/checkout/Checkout';
import CreatePatch from "./components/createPatch";
import Home from "./components/home";
import Cart from './components/cart/cart';

import registerServiceWorker from "./registerServiceWorker";


const Root = () => (
    <Router>
        <React.Fragment>
            <Navbar />
            
                <Route component={Home} exact path="/" />
                <Route component={Signin} path="/signin" />
                <Route component={Signup} path="/signup" />
                <Route component={Checkout} path="/checkout" />
                <Route component={CreatePatch} path="/createPatch" />
                <Route component={Cart} path="/cart" />
            
        </React.Fragment>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();