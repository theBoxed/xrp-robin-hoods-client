import React from 'react';
import './topbar.css';
import { BrowserRouter as Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends React.Component {
  render() {
    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <div
        id="flyoutMenu"
        onMouseUp={this.props.handleMouseDown}
        className={visibility}
      >
      <h1>Menu</h1>
        <h2>
          <Link to="/">
            <a id="menu-dashboard" href="/">
              Dashboard
            </a>
          </Link>
        </h2>

        <h2>
          <Link to="/last-week">
            <a id="menu-lastWeek" href="/last-week">
              Last Week
            </a>
          </Link>
        </h2>
        <h2>
          <Link to="/all-time">
            <a id="menu-allTime" href="/all-time">
              All-Time
            </a>
          </Link>
        </h2>
        <h2>
          <Link to="/leaderboard">
            <a id="menu-leaderboard" href="/leaderboard">
              Leaderboard
            </a>
          </Link>
        </h2>
      </div>
    );
  }
}
