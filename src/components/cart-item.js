import React, { Component } from 'react';
import { Button, Image, Grid, Label, Header } from 'semantic-ui-react';

export default class Cart extends Component {
  onDeleteClick = (e, { foodkey, amount }) => {
    this.props.removeFromCart(foodkey, amount);
  };

  onMinusClick = (e, { foodkey }) => {
    this.props.removeFromCart(foodkey, 1);
  };

  onPlusClick = (e, { food }) => {
    this.props.addToCart(food, 1);
  };

  render() {
    return (
      <Grid.Row divided centered>
        <Grid.Column width={7}>
          <Grid>
            <Grid.Column width={5}>
              <Image size="tiny" src={this.props.foodData.img_src} />
            </Grid.Column>
            <Grid.Column width={11} verticalAlign="middle">
              <Header content={this.props.foodData.title} />
            </Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column verticalAlign="middle" textAlign="center" width={2}>
          {this.props.foodData.price}
        </Grid.Column>

        <Grid.Column verticalAlign="middle" textAlign="center" width={2}>
          <Label
            icon="minus"
            foodkey={this.props.foodData.key}
            onClick={this.onMinusClick}
          />
          <Label content={this.props.amount} />
          <Label
            icon="plus"
            food={this.props.foodData}
            onClick={this.onPlusClick}
          />
        </Grid.Column>

        <Grid.Column verticalAlign="middle" textAlign="center" width={2}>
          {(this.props.amount * this.props.foodData.price).toFixed(2)}
        </Grid.Column>

        <Grid.Column>
          <Button
            color="red"
            size="small"
            icon="trash"
            foodkey={this.props.foodData.key}
            amount={this.props.amount}
            onClick={this.onDeleteClick}
          />
        </Grid.Column>
      </Grid.Row>
    );
  }
}
