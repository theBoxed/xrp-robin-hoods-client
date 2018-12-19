import React from 'react';
import MenuButton from '../buttons/MenuButton';
import Menu from './menu';
import { BrowserRouter as Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import './MenuContainer.css';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <nav role="navigation">
        <Modal />
        <MenuButton handleMouseDown={this.handleMouseDown} />
          {/* <Menu
            handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible}
          /> */}
      </nav>
    );
  }
}
