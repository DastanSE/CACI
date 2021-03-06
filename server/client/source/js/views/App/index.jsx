import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from 'views/MainPage';
import RepertoirePage from 'views/RepertoirePage';
import AboutPage from 'views/AboutPage';
import ArticlePage from 'views/ArticlePage';
import ContactPage from 'views/ContactPage';
import NewsPage from 'views/NewsPage';
import SpacePage from 'views/SpacePage';
import JobsPage from 'views/JobsPage';
import TeamPage from 'views/TeamPage';
import { SupportPage } from 'views/SupportPage';
import EventsPage from 'views/EventsPage';
import CrowdfundPage from 'views/CrowdfundPage';
import Menu from 'components/Global/Menu';
import { Footer } from 'components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  MAINPAGE: publicPath,
  CONTACT: `${ publicPath }contact`,
  ABOUT: `${ publicPath }about`,
  ARTICLE: `${ publicPath }article`,
  REPERTOIRE: `${ publicPath }repertoire`,
  YIWENSPACE: `${ publicPath }yiwenspace`,
  EVENTS: `${ publicPath }events`,
  SUPPORT: `${ publicPath }support`,
  NEWSPAGE: `${ publicPath }news`,
  JOBSPAGE: `${ publicPath }jobs`,
  TEAMPAGE: `${ publicPath }team`,
  CROWDFUND: `${ publicPath }crowdfund`,
};

class App extends Component {
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
              <Route path={ routeCodes.ARTICLE } component={ ArticlePage } />
              <Route path={ routeCodes.REPERTOIRE } component={ RepertoirePage } />
              <Route path={ routeCodes.CONTACT } component={ ContactPage } />
              <Route path={ routeCodes.EVENTS } component={ EventsPage } />
              <Route path={ routeCodes.YIWENSPACE } component={ SpacePage } />
              <Route path={ routeCodes.SUPPORT } component={ SupportPage } />
              <Route path={ routeCodes.NEWSPAGE } component={ NewsPage } />
              <Route path={ routeCodes.JOBSPAGE } component={ JobsPage } />
              <Route path={ routeCodes.TEAMPAGE } component={ TeamPage } />
              <Route path={ routeCodes.CROWDFUND } component={ CrowdfundPage } />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
