import React from 'react';
import PropTypes from 'prop-types'

const styles = {
  root: {
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#CD9266',
    color: 'white',
    padding: '16px',
    fontSize: '1.5em',
  },
};

const TitleBar = (props) => {
  const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
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