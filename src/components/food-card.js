import React, { Component } from 'react';
import {
  Segment,
  Header,
  Container,
  Image,
  Grid,
  Button
} from 'semantic-ui-react';

export default class FoodPanel extends Component {
  render() {
    return (
      <Grid.Column width="6">
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width="10" textAlign="center" verticalAlign="middle">
                <Header size="large" content={this.props.foodData.title} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ height: '15em' }}>
              <Grid.Column width="9">
                <Container>
                  <p>{this.props.foodData.description}</p>
                </Container>
              </Grid.Column>

              <Grid.Column width="7">
                <Image
                  size="large"
                  spaced
                  circular
                  src={this.props.foodData.img_src}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="5">
                <Button color="teal" fluid animated="fade">
                  <Button.Content content={this.props.foodData.price} visible />
                  <Button.Content content="Add to Cart!" hidden />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    );
  }
}
