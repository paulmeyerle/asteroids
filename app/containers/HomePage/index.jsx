import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>HomePage</div>
        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default HomePage