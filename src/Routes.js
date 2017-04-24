import React, {Component} from 'react'
import AppLayout from './layout/AppLayout';
import FuelTrend from './components/FuelTrend'
import Home from './components/Home'
import Gdp from './components/Gdp'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


export default class Routes extends Component {

  render() {
    return <Router>
      <AppLayout>
        <Route path="/" exact component={Home}/>
        <Route path="/fuel" component={FuelTrend}/>
        <Route path="/gdp" component={Gdp}/>
      </AppLayout>
    </Router>
  }

}