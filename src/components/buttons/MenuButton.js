import React, { Component } from 'react';
import './MenuButton.css';
import { BrowserRouter as Link } from 'react-router-dom';

export default class MenuButton extends Component {
  render() {
    return (
      <div className="plus-btn-pos">
        <h4 className="back-to-dashboard">
          <Link to="/">
            <a id="menu-dashboard" href="/">
              Back to Dashboard
            </a>
          </Link>
        </h4>
        {/* <button aria-label="Navigate" className="plus-btn"
        onMouseUp={this.props.handleMouseDown}>
          <div className="r1"></div>
          <div className="r2"></div>
          <div className="r3"></div>
      </button> */}
      </div>
    );
  }
}
