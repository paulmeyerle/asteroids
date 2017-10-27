import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from 'containers/HomePage';
import SettingsPage from 'containers/SettingsPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Asteroids</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    );
  }
}

export default App
