import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import { Nav, NavItem, Navbar, Image } from 'react-bootstrap';

export default class Menu extends Component {
  render() {
    return (
      <Navbar id='header' inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink exact to={ routeCodes.MAINPAGE }>
              <Image
                style={ { marginTop: '8px' } }
                src='https://res.cloudinary.com/cacicloud/image/upload/v1523627458/mainpage/logo.png'
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <NavLink to={ routeCodes.ABOUT }>關於我們</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ routeCodes.REPERTOIRE }>劇目採購</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ routeCodes.ARTICLE }>藝文資訊</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ routeCodes.YIWENSPACE }>孵化进驻</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ routeCodes.EVENTS }>活動信息</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to={ routeCodes.SUPPORT }>贊助合作</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ routeCodes.CONTACT }>聯繫我們</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
