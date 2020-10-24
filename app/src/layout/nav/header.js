import React, { Component } from "react";
import { Menu, Icon, Input } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import "./header.css";

export default class Header extends Component {

  render() {
    
    return (
      <Menu stackable>
        <Menu.Item className="logo-item">
          <Icon name='list' />
        </Menu.Item>
		
		<Menu.Item className="logo-item">
          User Dashboard
        </Menu.Item>
        
        <Menu.Item position="right">
          <Input placeholder="Search" />&nbsp;<Icon name="search" />
        </Menu.Item>
      </Menu>
    );
  }
}
