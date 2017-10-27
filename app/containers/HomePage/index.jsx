import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

class HomePage extends React.Component {
  render() {
    return (
      <div id="home-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Asteroids - Home</title>
        </Helmet>        
        <div className="woahThere">HomePage</div>
        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default HomePage