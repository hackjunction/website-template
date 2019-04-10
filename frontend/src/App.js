import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/HomePage';
import BasicPage from './pages/BasicPage';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalLifecycle from './GlobalLifecycle';

class App extends Component {

  render() {
    return (
      <Router className="foooofoo">
        <div className="App">
          <Header />
          <main className="App--main">
            <Switch>
              {/* Static pages */}
              <Route exact path="/" component={HomePage} />

              {/* Other pages */}
              <Route path="/:slug" component={BasicPage} />

              {/* If not matched, 404 */}
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </main>
          <Footer />
          <GlobalLifecycle />
        </div>
      </Router>
    )
  }
}

export default App;
