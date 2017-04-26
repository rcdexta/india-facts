import React, {Component} from 'react';
import TitleBar from './TitleBar';
import {Link} from 'react-router-dom'
import {MenuItem, NestedMenuItem, Divider} from '../styles/MenuStyles'
import LightBulb from 'react-icons/lib/ti/lightbulb'
import CaretRight from 'react-icons/lib/fa/caret-right'
import Money from 'react-icons/lib/fa/money'
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

const SidebarMenuItem = ({path, label}) => (
  <Route path={path} children={({match}) => {
    const styles = match ? {backgroundColor: 'rgba(255,255,0,0.1)', borderTop: '1px solid #c36a6a', borderBottom: '1px solid #c36a6a'} : {}
    return <NestedMenuItem style={styles}>
      <Link to={path}><CaretRight/><span className='label'>{label}</span></Link>
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
            <LightBulb className='fa'/>
            <span className='label'>Energy</span>
          </MenuItem>
          <SidebarMenuItem path='/petrol_price' label='Petrol Price' />
          <SidebarMenuItem path='/diesel_price' label='Diesel Price' />
          <MenuItem><Link to='/gdp'>
            <Money className='fa'/>
            <span className='label'>Gdp</span>
          </Link></MenuItem>
        </div>
      </TitleBar>
    );
  }
}