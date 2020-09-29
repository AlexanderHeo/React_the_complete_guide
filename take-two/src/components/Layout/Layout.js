import React, { Component } from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  handleCloseSideDrawer = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  handleSideDrawerToggle = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
        <>
          <Toolbar drawerToggleClicked={this.handleSideDrawerToggle}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.handleCloseSideDrawer}
          />
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </>
    )
  }
}

export default Layout;
