import React from 'react';
import PropTypes from 'prop-types'
import TrendImg from '../images/trends-icon.png'
import {FlexContainer, LogoImg} from '../styles/BaseStyles'

const styles = {
  root: {
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#21232B',
    color: 'white',
    padding: '16px',
    fontSize: '1.5em',
    textAlign: 'center'
  },
};

const TitleBar = (props) => {
  const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

  return (
    <div style={rootStyle}>
      <FlexContainer style={styles.header}>
        <LogoImg src={TrendImg}/>
        {props.title}
      </FlexContainer>
      {props.children}
    </div>
  );
};

TitleBar.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  children: PropTypes.object,
};

export default TitleBar;