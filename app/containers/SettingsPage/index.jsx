import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

class SettingsPage extends React.Component {
  render() {
    return (
      <div id="settings-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Asteroids - Settings</title>
        </Helmet>        
        <div>Settings</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SettingsPage