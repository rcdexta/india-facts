import React, {Component} from 'react'
import AppLayout from './layout/AppLayout';
import FuelTrend from './components/FuelTrend'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Routes extends Component {

  render() {
    return <Router>
      <AppLayout>
        <Route path="/" component={Home}/>
        <Route path="/fuel" component={FuelTrend}/>
      </AppLayout>
    </Router>
  }

}