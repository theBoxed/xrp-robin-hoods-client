import React, { Component } from "react";
import './MenuButton.css';

export default class MenuButton extends Component {
  render() {
    return (
      <div className="plus-btn-pos">
      <button aria-label="Navigate" className="plus-btn"
        onMouseUp={this.props.handleMouseDown}>
          <div className="r1"></div>
          <div className="r2"></div>
          <div className="r3"></div>
      </button>
      </div>
    );
  }
}



