import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';

class SettingsPage extends React.Component {
  render() {
    return (
      <div id="settings-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Asteroids - Settings</title>
        </Helmet> 
        <Header />       
        <h1>Settings</h1>
      </div>
    );
  }
}

export default SettingsPage