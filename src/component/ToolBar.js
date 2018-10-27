import React from 'react';
import classes from '../styles/toolbar.css';
import logo from '../assets/images/burger-logo.png';
import { Link, NavLink } from 'react-router-dom'

const ToolBar = (props) => {
  const {
    linkList,
    showMenu,
    toggleMenu
  } = props
  const navClass = showMenu ? [classes.menuList, classes.show].join(' ') : classes.menuList;
  return (
    <header className={classes.toolbar}>
      {/* logo */}
      <div className={classes.logo}>
        <Link to="/" style={{ display: 'block' }}><img src={logo} alt="" /></Link>
      </div>
      {/* menu */}
      <nav>
        <div className={showMenu ? classes.backdrop : null} onClick={toggleMenu}></div>
        <ul className={navClass}>
          <li className={classes.closeBtn} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </li>
          {linkList.map((item, index) => (
            <li className={classes.menuItem} key={index}>
              <NavLink exact
                to={item.link}
                activeClassName={classes.active}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={classes.burgerMenu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    </header>
  )
}



export default ToolBar