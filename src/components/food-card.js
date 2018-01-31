import React, { Component } from 'react';
import { Image, Grid, Button, Card } from 'semantic-ui-react';

export default class FoodCard extends Component {
  render() {
    return (
      <Grid.Column width="6">
        <Card raised fluid>
          <div style={{ height: '18em', overflow: 'hidden' }}>
            <Image size="large" src={this.props.foodData.img_src} />
          </div>
          <Card.Content
            style={{ height: '11em', overflow: 'hidden' }}
            header={this.props.foodData.title}
            description={this.props.foodData.description}
          />
          <Card.Content extra>
            <Button.Group color="teal">
              <Button icon="minus" />
              <Button.Or />
              <Button icon="plus" />
            </Button.Group>

            <Button floated="right" color="teal" animated="fade">
              <Button.Content content={this.props.foodData.price} visible />
              <Button.Content content="Add to Cart!" hidden />
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}
