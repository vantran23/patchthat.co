import React, { Component } from "react";
import {Route} from 'react-router-dom';
import "./App.css";

import createPatch from '../components/createPatch';

class App extends Component {
  render() {
    return <div>
      <Route path= "/createpatchtesting" exact component ={createPatch} />
    </div>;
  }
}

export default App;