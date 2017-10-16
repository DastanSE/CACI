import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Menu extends Component {
  render() {
    return (
      <nav id='float_banner' className='navbar-home navbar navbar-inverse' role='navigation'>
        <div className='container' style={ { height: 50 } }>
          <div id='float' className='navbar-header'>
            <NavLink activeClassName='' className='navbar-brand' exact to={ routeCodes.MAINPAGE }>
              <img className='' src='../../../assets/img/logo.png' />
            </NavLink>
          </div>
          <div className='collapse navbar-collapse navbar-right'>
            <ul id='menu-body-menu' className='nav navbar-nav'>
              <li
                id='menu-item-25'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-25'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.ABOUT }
                >
                  關於我們
                </NavLink>
              </li>

              <li
                id='menu-item-25'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-25'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.REPERTOIRE }
                >
                  劇目採購
                </NavLink>
              </li>

              <li
                id='menu-item-25'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-25'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.ARTICLE }
                >
                  藝文資訊
                </NavLink>
              </li>


              <li
                id='menu-item-25'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-25'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.YIWENSPACE }
                >
                  孵化进驻
                </NavLink>
              </li>

              <li
                id='menu-item-807'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.EVENTS }
                >
                  活動信息
                </NavLink>
              </li>

              <li
                id='menu-item-807'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.SUPPORT }
                >
                  贊助合作
                </NavLink>
              </li>

              <li
                id='menu-item-807'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
              >
                <NavLink
                  activeClassName=''
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
                  to={ routeCodes.CONTACT }
                >
                  聯繫我們
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
