import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { categorys } from '../constants/api-constants';
import QueryString from 'query-string';

export default class FoodFilter extends Component {
  constructor(props) {
    super(props);

    const filterParams = QueryString.parse(this.props.query);

    this.state = {
      activeItem: filterParams.category
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu fluid vertical pointing secondary>
        {categorys.map(mappingCategory => (
          <Menu.Item
            key={categorys.indexOf(mappingCategory)}
            as={Link}
            to={`/menu?category=${mappingCategory}`}
            replace
            name={mappingCategory}
            active={this.state.activeItem === mappingCategory}
            onClick={this.handleItemClick}
          />
        ))}
        <Menu.Item>
          <Input icon="search" placeholder="Search food..." />
        </Menu.Item>
      </Menu>
    );
  }
}
