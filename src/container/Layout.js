import React, { Component } from 'react';
import classes from '../styles/layout.css';
import ToolBar from '../component/ToolBar';

class Layout extends Component {
  state = {
    showMenu: false,
    linkList: [
      { link: '/', active: true, text: 'Burger Builder' },
      { link: '/orderhistory', active: false, text: 'All orders' },
    ]
  }

  toggleMenu = () => {
    const showMenu = !this.state.showMenu
    this.setState({ showMenu })
  }

  render() {
    return (
      <React.Fragment>
        <ToolBar
          linkList={this.state.linkList}
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
        <div>SideDrawer</div>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;