import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import SideBarContent from './SidebarContent'
import TitleBar from './TitleBar'
import {RightContentDiv} from '../styles/AppStyles.js'

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

export default class AppLayout extends Component {

  state = {
    mql: mql,
    docked: false,
    open: false,
  };

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({mql: mql, docked: mql.matches})
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
    const sidebar = <SideBarContent/>;

    const contentHeader = (
      <span>
        <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>
        <span> India Trends </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        {!this.state.docked && <TitleBar title={contentHeader}/>}
        <RightContentDiv>
          {this.props.children}
        </RightContentDiv>
      </Sidebar>
    );
  }
}