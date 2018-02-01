import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

export default class FoodFilter extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'all' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu fluid vertical pointing secondary>
        <Menu.Item
          name="all"
          active={this.state.activeItem === 'all'}
          onClick={this.handleItemClick}
        >
          All
        </Menu.Item>

        <Menu.Item
          name="bel_cuisine"
          active={this.state.activeItem === 'bel_cuisine'}
          onClick={this.handleItemClick}
        >
          Belarusian cuisine
        </Menu.Item>

        <Menu.Item
          name="appetizers"
          active={this.state.activeItem === 'appetizers'}
          onClick={this.handleItemClick}
        >
          Appetizers
        </Menu.Item>

        <Menu.Item
          name="salads"
          active={this.state.activeItem === 'salads'}
          onClick={this.handleItemClick}
        >
          Salads
        </Menu.Item>

        <Menu.Item
          name="hot_starters"
          active={this.state.activeItem === 'hot_starters'}
          onClick={this.handleItemClick}
        >
          Hot starters
        </Menu.Item>

        <Menu.Item
          name="hot_dishes"
          active={this.state.activeItem === 'hot_dishes'}
          onClick={this.handleItemClick}
        >
          Hot dishes
        </Menu.Item>

        <Menu.Item
          name="desserts"
          active={this.state.activeItem === 'desserts'}
          onClick={this.handleItemClick}
        >
          Desserts
        </Menu.Item>

        <Menu.Item
          name="ice_cream"
          active={this.state.activeItem === 'ice_cream'}
          onClick={this.handleItemClick}
        >
          Ice-cream
        </Menu.Item>

        <Menu.Item>
          <Input icon="search" placeholder="Search food..." />
        </Menu.Item>
      </Menu>
    );
  }
}
