import React, {Component} from 'react'
import AppLayout from './layout/AppLayout';
import {PetrolTrend, DieselTrend} from './components/FuelTrend'
import Home from './components/Home'
import Population from './components/Population'
import Forecasts from './components/Forecasts'
import InternetPenetration from './components/InternetPenetration'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


export default class Routes extends Component {

  render() {
    return <Router>
      <AppLayout>
        <Route path="/" exact component={Home}/>
        <Route path="/petrol_price" component={PetrolTrend}/>
        <Route path="/diesel_price" component={DieselTrend}/>
        <Route path="/population" component={Population}/>
        <Route path="/forecasts" component={Forecasts}/>
        <Route path="/internet_penetration" component={InternetPenetration}/>
      </AppLayout>
    </Router>
  }

}