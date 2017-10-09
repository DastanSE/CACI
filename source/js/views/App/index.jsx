import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from 'views/MainPage';
import RepertoirePage from 'views/RepertoirePage';
import AboutPage from 'views/AboutPage';
import ContactPage from 'views/ContactPage';
import SpacePage from 'views/SpacePage';
import EventsPage from 'views/EventsPage';
import Menu from 'components/Global/Menu';
import { Footer } from 'components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  MAINPAGE: publicPath,
  CONTACT: `${ publicPath }contact`,
  ABOUT: `${ publicPath }about`,
  REPERTOIRE: `${ publicPath }repertoire`,
  YIWENSPACE: `${ publicPath }yiwenspace`,
  EVENTS: `${ publicPath }events`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route exact path={ routeCodes.MAINPAGE } component={ MainPage } />
              <Route path={ routeCodes.ABOUT } component={ AboutPage } />
              <Route path={ routeCodes.REPERTOIRE } component={ RepertoirePage } />
              <Route path={ routeCodes.CONTACT } component={ ContactPage } />
              <Route path={ routeCodes.EVENTS } component={ EventsPage } />
              <Route path={ routeCodes.YIWENSPACE } component={ SpacePage } />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
