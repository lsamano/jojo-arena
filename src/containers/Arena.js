import React, { Component } from 'react';
import ArenaFighter from '../components/ArenaFighter';
import { Grid, Header, Container, Button } from 'semantic-ui-react';

class Arena extends Component {

  render() {
    const { name: pName } = this.props.chosenProtag
    const { name: aName } = this.props.chosenAntag
    return (
      <Grid centered>
        <Grid.Row column={1}>
          <Grid.Column>
            <Container>
            <Header as='h1' textAlign='center'>
              Arena
            </Header>
            <Button
              color='purple'
              onClick={this.props.doBattle}
              fluid
              disabled={!pName || !aName}>
              Fight!
            </Button>
          </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <ArenaFighter fighter={this.props.chosenProtag}/>
          <ArenaFighter fighter={this.props.chosenAntag}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Arena;
