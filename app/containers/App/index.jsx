import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import SettingsPage from 'containers/SettingsPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    );
  }
}

export default App
