import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Launch from "./components/Launch";
import Health from "./components/Health";
import Food from "./components/Food";
import Class from './components/Class';
import FinancialAid from './components/FinancialAid'
import Residence from './components/Residence'
import Guidance from './components/Guidance'
import Tips from './components/Tips'
import Majors from './components/Majors'

export default class Main extends Component {
  render() {
    return (
      <div id = "webpage">
        <Navbar />

        <Router>
          <Switch>
            <Route exact path="/"  component={Launch} />
            <Route exact path="/tips"  component={Tips} />
            <Route exact path="/guidance"  component={Guidance} />
            <Route exact path="/residence"  component={Residence} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/financial" component={FinancialAid} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/classes" component={Class} />
            <Route exact path="/health" component={Launch} />
            <Route exact path="/majors" component={Majors} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}
