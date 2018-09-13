import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => (
  <NavLink exact={props.to === "/"} to={props.to} className="LeftNav__li nav-item" onClick={props.onClick}>
    <span className="LeftNav__active-indicator"></span>
    <span>{props.text}</span>
  </NavLink>
)

export default NavItem
