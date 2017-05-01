import React, {Component} from 'react'
import AppLayout from './layout/AppLayout';
import {PetrolTrend, DieselTrend} from './components/FuelTrend'
import Population from './components/Population'
import Forecasts from './components/Forecasts'
import InternetPenetration from './components/InternetPenetration'
import IspMarketShare from './components/IspMarketShare'
import Co2Emissions from './components/Co2Emissions'
import LifeExpectancy from './components/LifeExpectancy'
import LiteracyRate from './components/LiteracyRate'
import InternetSpeedStats from './components/InternetSpeedStats'
import Intro from './components/Intro'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


export default class Routes extends Component {

  render() {
    return <Router>
      <AppLayout>
        <Route path="/" exact component={Intro}/>
        <Route path="/petrol_price" component={PetrolTrend}/>
        <Route path="/diesel_price" component={DieselTrend}/>
        <Route path="/population" component={Population}/>
        <Route path="/forecasts" component={Forecasts}/>
        <Route path="/internet_penetration" component={InternetPenetration}/>
        <Route path="/share_of_isps" component={IspMarketShare}/>
        <Route path="/co2_emissions" component={Co2Emissions}/>
        <Route path="/life_expectancy" component={LifeExpectancy}/>
        <Route path="/literacy_rate" component={LiteracyRate}/>
        <Route path="/speed_stats" component={InternetSpeedStats}/>
      </AppLayout>
    </Router>
  }

}