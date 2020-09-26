import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  handleSideDrawerToggle = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  handleSideDrawerCloser = () => {
    this.setState({
      showSideDrawer: false
    });
  }

  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.handleSideDrawerToggle} />
        <SideDrawer
          opened={this.state.showSideDrawer}
          closed={this.handleSideDrawerCloser}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}


export default Layout;
