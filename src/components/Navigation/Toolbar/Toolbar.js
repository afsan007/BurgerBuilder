import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => ( 
  <header className = {classes.Toolbar}>
    <DrawerToggle clicked={props.toggleDrawer}/>
    <div className={classes.logo}>
      <Logo height="34px"/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticate={props.isAuth}/>
    </nav> 
  </header>
)

export default toolbar;
