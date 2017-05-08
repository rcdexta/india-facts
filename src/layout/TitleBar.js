import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/logo.png'
import { FlexContainer, LogoImg } from '../styles/BaseStyles'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    fontWeight: 300
  },
  header: {
    backgroundColor: '#21232B',
    color: 'white',
    fontSize: '1.2em',
    textAlign: 'center'
  }
}

const TitleBar = props => {
  const rootStyle = props.style ? { ...styles.root, ...props.style } : styles.root
  const headerStyle = props.image ? styles.header : { ...styles.header, padding: 8 }

  return (
    <div style={rootStyle}>
      <Link to="/">
        <FlexContainer style={headerStyle}>
          {props.image && <LogoImg src={Logo} />}
          {props.title}
        </FlexContainer>
      </Link>
      {props.children}
    </div>
  )
}

TitleBar.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
}

export default TitleBar
