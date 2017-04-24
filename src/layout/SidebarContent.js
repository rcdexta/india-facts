import React from 'react';
import PropTypes from 'prop-types'
import TitleBar from './TitleBar';
import {Link} from 'react-router-dom'
import {MenuItem, Divider} from '../styles/MenuStyles'
import FontAwesome from 'react-fontawesome'

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

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  return (
    <TitleBar title="India Trends" style={style}>
      <div style={styles.content}>
          <MenuItem><Link to='/fuel'>
            <FontAwesome name='tint'/>
            <span className='label'>Fuel Prices</span>
          </Link></MenuItem>
          <Divider />
          <MenuItem><Link to='/gdp'>
            <FontAwesome name='money'/>
            <span className='label'>Gdp</span>
          </Link></MenuItem>
          <Divider />
      </div>
    </TitleBar>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;