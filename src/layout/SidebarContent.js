import React, {Component} from 'react';
import TitleBar from './TitleBar';
import {Link} from 'react-router-dom'
import {MenuItem, NestedMenuItem, Divider} from '../styles/MenuStyles'
import Energy from 'react-icons/lib/fa/bolt'
import Globe from 'react-icons/lib/fa/globe'
import Person from 'react-icons/lib/fa/male'
import Money from 'react-icons/lib/fa/money'
import Petrol from 'react-icons/lib/fa/cab'
import Diesel from 'react-icons/lib/fa/bus'
import Forecast from 'react-icons/lib/fa/line-chart'
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
    return <NestedMenuItem style={styles}>
      <Link to={path}>{icon}<span className='label'>{label}</span></Link>
    </NestedMenuItem>
  }
  }/>
)

export default class SidebarContent extends Component {

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
          <MenuItem>
            <Energy/>
            <span className='label'>Energy</span>
          </MenuItem>
          <SidebarMenuItem path='/petrol_price' label='Petrol Price' icon={<Petrol/>}/>
          <SidebarMenuItem path='/diesel_price' label='Diesel Price' icon={<Diesel/>}/>
          <MenuItem><Link to='/gdp'>
            <Money className='fa'/>
            <span className='label'>Gdp</span>
          </Link></MenuItem>
        </div>
      </TitleBar>
    );
  }
}