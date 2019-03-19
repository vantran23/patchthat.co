import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from "./components/App";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
    <Router>
        <React.Fragment>
            <Navbar />
                <Route component={App} path="/" />
                <Route component={Signin} path="/signin" />
                <Route component={Signup} path="/signup" />
                <Route component={Checkout} path="/checkout" />
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
