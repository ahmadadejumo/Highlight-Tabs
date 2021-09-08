import React from 'react';
import Tab from './Tab';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="tabs">
      <Tab>
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/about">About</NavLink>
      </Tab>
      <Tab>
        <NavLink to="/contact">Contact</NavLink>
      </Tab>
    </div>
  );
};

export default Header;
