import React, { Component } from 'react';
import { Grid, Header, Container, Button, Image } from 'semantic-ui-react';

class Arena extends Component {

  render() {
    const { name, image, stand } = this.props.chosenProtag
    return (
      <Grid centered>
        <Grid.Row column={1}>
          <Container>
            <Header as='h1' textAlign='center'>
              Arena
            </Header>
            <Button color='purple' onClick={this.props.doBattle} fluid disabled={!name || !this.props.chosenAntag.name}>
              Fight!
            </Button>
          </Container>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            { name && `${name} & ${stand}` }
            <Image src={image} alt='' centered/>
          </Grid.Column>
          <Grid.Column>
            { this.props.chosenAntag.name && `${this.props.chosenAntag.name} & ${this.props.chosenAntag.stand}` }
            <Image src={this.props.chosenAntag.image} alt='' centered/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Arena;
