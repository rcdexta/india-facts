import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import MenuIcon from 'react-icons/lib/md/menu'
import {RightContentDiv} from '../styles/AppStyles.js'
import {withRouter} from 'react-router-dom';
const ReactGA = require('react-ga');

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);

class AppLayout extends Component {

  state = {
    mql: mql,
    docked: false,
    open: false,
  };

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({mql: mql, docked: mql.matches})

  }

  componentDidMount() {
    this.initGA()
    this.listenRoutes()
  }

  initGA = () => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-98392318-1', {debug: true});
      this.recordViewInGA()
    }
  }

  recordViewInGA = () => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.set({page: window.location.pathname});
      ReactGA.pageview(window.location.pathname);
    }
  }

  listenRoutes = () => {
    this.props.history.listen(() => {
      //Close sidebar on route change
      this.toggleOpen()
      this.recordViewInGA()
    })
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  onSetOpen = (open) => {
    this.setState({open: open})
  }

  mediaQueryChanged = () => {
    this.setState({mql: mql, docked: this.state.mql.matches})
  }

  toggleOpen = (ev) => {
    this.setState({open: !this.state.open})
    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <MenuBar/>;

    const contentHeader = (
      <span>
        <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}><MenuIcon/></a>
        <span> India Facts </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        {!this.state.docked && <TitleBar title={contentHeader} image={false}/>}
        <RightContentDiv>
          {this.props.children}
        </RightContentDiv>
      </Sidebar>
    );
  }
}

export default withRouter(AppLayout)