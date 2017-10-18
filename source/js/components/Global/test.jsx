import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { routeCodes } from "../../views/App";
import { Nav, NavItem, Button } from "react-bootstrap";

export default class Menu extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink
              activeClassName=""
              className="navbar-brand"
              exact
              to={routeCodes.MAINPAGE}
            >
              <img className="" src="../../../assets/img/logo.png" />
            </NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.ABOUT}
            >
              關於我們
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.REPERTOIRE}
            >
              劇目採購
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.ARTICLE}
            >
              藝文資訊
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.YIWENSPACE}
            >
              孵化进驻
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.EVENTS}
            >
              活動信息
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.SUPPORT}
            >
              贊助合作
            </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <NavLink
              activeClassName=""
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"
              to={routeCodes.CONTACT}
            >
              聯繫我們
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
