import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { routeCodes } from '../../views/App';


export default class Menu extends Component {

  render() {
    return (
      <div id='header'>
        {/* <nav id="float_banner" className="navbar-home navbar navbar-inverse" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="http://caci.hk"><img src="../../../assets/img/logo.png" alt="logo"></img></a>
              </div>
              <div className="collapse navbar-collapse navbar-right">
                <ul id="menu-body-menu" className="nav navbar-nav"><li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"><a href="http://caci.hk/about/">關於我們</a></li>
                  <li id="menu-item-1044" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1044"><a href="http://caci.hk/yiwen-space/">孵化進駐</a></li>
                  <li id="menu-item-1960" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1960"><a href="http://caci-bj.com/crowdfunding/">項目眾籌</a></li>
                  <li id="menu-item-1700" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1700"><a href="http://caci.hk/repertoire/">劇目採購</a></li>
                  <li id="menu-item-2079" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2079"><a href="http://yiwen-iei.com/">藝術培訓</a></li>
                  <li id="menu-item-1862" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1862"><a href="http://caci-bj.com/">商店藝廊</a></li>
                  <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a href="http://caci.hk/events/">活動信息</a></li>
                  <li id="menu-item-1060" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1060"><a href="http://caci.hk/article/">藝文資訊</a></li>
                  <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a href="http://caci.hk/support/">贊助合作</a></li>
                  <li id="menu-item-807" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"><a href="http://caci.hk/contact/">聯繫我們</a></li>

                </ul>
              </div>
            </div>

          </nav> */}

      <nav id="float_banner" className="navbar-home navbar navbar-inverse" role="navigation">
        <div id="float" className='menu_class navbar'>
          <NavLink
            activeClassName='Menu-link--active'
            className='navbar-brand'
            exact
            to={ routeCodes.MAINPAGE }
          >

            <img className="" src="../../../assets/img/logo.png"></img>
          </NavLink>
          <div className="collapse navbar-collapse navbar-right">
            <ul id="menu-body-menu" className="nav navbar-nav">
              <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">


          </li>
          <li id="menu-item-807" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807">
            <NavLink
              activeClassName=''
              className='menu-item menu-item-type-post_type menu-item-object-page menu-item-807'
              to={ routeCodes.ABOUT }
            >
              關於我們
            </NavLink>
          </li>
          </ul>
        </div>
        </div>
      </nav>
      </div>
    );
  }
}
