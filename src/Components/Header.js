import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <ul className="header">
      <li>
        <NavLink to="/">Staffing Tracker</NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/createOpp" exact={true}>
          CreateOpportunity
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/createDemand">
          CreateDemand
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;