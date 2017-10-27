import React from 'react';
import { Link } from 'react-router-dom'

class SettingsPage extends React.Component {
  render() {
    return (
      <div>
        <div>Settings</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SettingsPage