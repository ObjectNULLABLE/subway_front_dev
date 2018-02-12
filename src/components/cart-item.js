import React, { Component } from 'react';
import { Image, Grid, Label, Header, Input } from 'semantic-ui-react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { descriptionVisible: false };
  }

  handleDescriptionClick = (e, titleProps) => {
    this.state.descriptionVisible
      ? this.setState({ descriptionVisible: false })
      : this.setState({ descriptionVisible: true });
  };

  render() {
    return (
      <Grid.Row divided centered>
        <Grid.Column width={8}>
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
          <Input
            labelPosition="right"
            size="mini"
            type="text"
            fluid
            defaultValue={this.props.amount}
          >
            <Label basic icon="minus" />
            <input />
            <Label basic icon="plus" />
          </Input>
        </Grid.Column>

        <Grid.Column verticalAlign="middle" textAlign="center" width={2}>
          {(this.props.amount * this.props.foodData.price).toFixed(2)}
          <Label
            as="a"
            color="red"
            attached="top right"
            size="small"
            icon="trash"
          />
        </Grid.Column>
      </Grid.Row>
    );
  }
}
