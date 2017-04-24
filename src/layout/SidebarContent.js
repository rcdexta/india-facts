import React from 'react';
import PropTypes from 'prop-types'
import TitleBar from './TitleBar';
import FontAwesome from 'react-fontawesome'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 2,
    backgroundColor: '#505050',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: '#333333',
    fontWeight: 700,
    color: '#fff'
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <TitleBar title="India Trends" style={style}>
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>About</a>
        <a href="responsive_example.html" style={styles.sidebarLink}>Sources</a>
        <div style={styles.divider}/>
        <a key='energy' href="#" style={styles.sidebarLink}>Energy</a>
        <a key='fuel' href="#" style={styles.sidebarLink}><FontAwesome name='chevron-right'/> Fuel Price</a>
      </div>
    </TitleBar>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;