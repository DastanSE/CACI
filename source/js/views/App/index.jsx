import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import About from 'views/About';
import Menu from 'components/Global/Menu';
import Footer from 'components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ACCOUNTS: `${ publicPath }accounts`,
  ABOUT: `${ publicPath }about`,
  SIGNIN: `${ publicPath }signin`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route path={ routeCodes.ABOUT } component={ About } />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
