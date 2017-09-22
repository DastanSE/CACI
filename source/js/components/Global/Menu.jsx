import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';


export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>

        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.MAINPAGE }
          >
            Main
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.ABOUT }
          >
            關於我們
          </NavLink>
        </div>
      </div>
    );
  }
}
