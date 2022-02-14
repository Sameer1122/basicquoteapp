import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate Quetos</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quetos" activeClassName={classes.active}>
              All Quetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quetos" activeClassName={classes.active}>
              {" "}
              New Quetos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
