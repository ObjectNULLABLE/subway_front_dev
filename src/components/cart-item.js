import React, { Component } from 'react';
import { Item, Button, Image } from 'semantic-ui-react';

export default class Cart extends Component {
  render() {
    return (
      <Item>
        <Item.Image size="medium">
          <div style={{ height: '13em', overflow: 'hidden' }}>
            <Image src={this.props.foodData.img_src} />
          </div>
        </Item.Image>
        <Item.Content style={{ height: '15em', overflow: 'hidden' }}>
          <Item.Header as="a">{this.props.foodData.title}</Item.Header>
          <Item.Meta>{this.props.foodData.category}</Item.Meta>
          <Item.Description>{this.props.foodData.description}</Item.Description>
          <Item.Extra>
            {`Price: 
            ${this.props.amount} x
            ${this.props.foodData.price} $ =
            ${(this.props.amount * this.props.foodData.price).toFixed(2)} $`}
            <Button
              content="Remove"
              floated="right"
              negative
              icon="trash"
              size="tiny"
            />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}
