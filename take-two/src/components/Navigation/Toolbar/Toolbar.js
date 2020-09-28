import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Hamburger Menu</div>
    <Logo />
    <nav>
      <ul>
        links
      </ul>
    </nav>
  </header>
);

export default toolbar;
