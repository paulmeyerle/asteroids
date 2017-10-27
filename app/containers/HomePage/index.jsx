import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';

class HomePage extends React.Component {
  render() {
    return (
      <div id="home-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Asteroids - Home</title>
        </Helmet>        
        <Header />
        <h1 className="woahThere">HomePage</h1>
      </div>
    );
  }
}

export default HomePage