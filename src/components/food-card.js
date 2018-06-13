import React, { Component } from "react";
import { Image, Grid, Button, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cart";
import { toastr } from "react-redux-toastr";

let addToCartToastr = {
  timeOut: 2000, // by setting to 0 it will prevent the auto close
  position: 'bottom-left',
  preventDuplicates: false,
  showCloseButton: false, // true by default
  // this option will give you a func 'remove' as props
};

class FoodCard extends Component {
  constructor(props) {
    super(props);

    this.state = { ordered: 1 };
  }

  onPlusClick = () => {
    this.setState({ ordered: this.state.ordered + 1 });
  };

  onMinusClick = () => {
    if (this.state.ordered !== 1) {
      this.setState({ ordered: this.state.ordered - 1 });
    }
  };

  addToCartClick = () => {
    this.props.addToCart(this.props.foodData, this.state.ordered);
    toastr.info(
      "New item was added to cart",
      `+ ${this.state.ordered} positions of "${this.props.foodData.title}"`,
      addToCartToastr
    );
  };

  render() {
    return (
      <Grid.Column mobile="16" computer="8">
        <Card
          link
          raised
          fluid
          style={{ maxHeight: "31em", overflow: "hidden" }}
        >
          <div style={{ height: "18em", overflow: "hidden" }}>
            <Image src={this.props.foodData.img_src} />
          </div>
          <Card.Content
            style={{ height: "11em", overflow: "hidden" }}
            header={this.props.foodData.title}
            description={this.props.foodData.description}
          />
          <Card.Content extra>
            <Grid>
              <Grid.Column width="5">
                <Button.Group fluid basic color="teal">
                  <Button icon="minus" onClick={this.onMinusClick} />
                  <Button.Or text={this.state.ordered} />
                  <Button icon="plus" onClick={this.onPlusClick} />
                </Button.Group>
              </Grid.Column>
              <Grid.Column width="5" floated="right">
                <Button
                  fluid
                  color="teal"
                  animated="fade"
                  onClick={this.addToCartClick}
                >
                  <Button.Content
                    content={this.props.foodData.price + " $"}
                    visible
                  />
                  <Button.Content content="Add to Cart!" hidden />
                </Button>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(FoodCard);
