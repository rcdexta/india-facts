import React, {Component} from 'react';
import TitleBar from './TitleBar';
import {Link} from 'react-router-dom'
import {MenuItem, NestedMenuItem} from '../styles/MenuStyles'
import Energy from 'react-icons/lib/md/wb-sunny'
import Globe from 'react-icons/lib/fa/globe'
import Person from 'react-icons/lib/md/wc'
import Telecom from 'react-icons/lib/go/radio-tower'
import Petrol from 'react-icons/lib/fa/cab'
import Diesel from 'react-icons/lib/fa/bus'
import Forecast from 'react-icons/lib/fa/line-chart'
import Internet from 'react-icons/lib/fa/edge'
import MarketShare from 'react-icons/lib/ti/chart-pie'
import CloudInternet from 'react-icons/lib/go/cloud-download'
import Environment from 'react-icons/lib/md/nature'
import Smoke from 'react-icons/lib/md/smoking-rooms'
import Life from 'react-icons/lib/fa/heartbeat'
import School from 'react-icons/lib/md/local-library'
import Literacy from 'react-icons/lib/ti/mortar-board'
import Sad from 'react-icons/lib/go/flame'
import {Route} from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    color: '#757575',
    textDecoration: 'none',
  },
  content: {
    height: '100%',
    backgroundColor: '#373a47',
    fontWeight: 700,
    color: '#b8b7ad',
    paddingTop: 10
  },
};

const SidebarMenuItem = ({path, label, icon}) => (
  <Route path={path} children={({match}) => {
    const styles = match ? {backgroundColor: 'rgba(255,255,0,0.1)', borderRight: '4px solid #7b875a'} : {}
    return <Link to={path}>
      <NestedMenuItem style={styles}>
        {icon}<span className='label'>{label}</span>
      </NestedMenuItem>
    </Link>
  }
  }/>
)

export default class MenuBar extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <TitleBar title="India Trends" style={styles.sidebar}>
        <div style={styles.content}>

          <MenuItem>
            <Globe/>
            <span className='label'>Demographics</span>
          </MenuItem>
          <SidebarMenuItem path='/population' label='Population' icon={<Person/>}/>
          <SidebarMenuItem path='/forecasts' label='Forecasts' icon={<Forecast/>}/>
          <SidebarMenuItem path='/life_expectancy' label='Life Expectancy' icon={<Life/>}/>

          <MenuItem>
            <Energy/>
            <span className='label'>Energy</span>
          </MenuItem>
          <SidebarMenuItem path='/petrol_price' label='Petrol Price' icon={<Petrol/>}/>
          <SidebarMenuItem path='/diesel_price' label='Diesel Price' icon={<Diesel/>}/>

          <MenuItem>
            <Telecom/>
            <span className='label'>Telecom</span>
          </MenuItem>
          <SidebarMenuItem path='/internet_penetration' label='Internet Penetration' icon={<Internet/>}/>
          <SidebarMenuItem path='/share_of_isps' label='ISP Market Share' icon={<MarketShare/>}/>
          <SidebarMenuItem path='/speed_stats' label='Speed Stats' icon={<CloudInternet/>}/>


          <MenuItem>
            <Environment/>
            <span className='label'>Environment</span>
          </MenuItem>
          <SidebarMenuItem path='/co2_emissions' label='CO2 Emissions' icon={<Smoke/>}/>

          <MenuItem>
            <School/>
            <span className='label'>Education</span>
          </MenuItem>
          <SidebarMenuItem path='/literacy_rate' label='Literacy Rate' icon={<Literacy/>}/>

        </div>
      </TitleBar>
    );
  }
}