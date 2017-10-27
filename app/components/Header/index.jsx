import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        Header <Link to="/">Home</Link> <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default Header