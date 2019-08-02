import React, { Component } from 'react';
import ProtagContainer from './containers/ProtagContainer';
import AntagContainer from './containers/AntagContainer';
import Arena from './containers/Arena';
import ScoreBoard from './components/ScoreBoard';
import { Container, Grid } from 'semantic-ui-react'

class App extends Component {
  state = {

  }

  doBattle = event => {
    // This function is being passed as a prop to Arena
  }

  render() {
    // Don't edit any of the Semantic UI React Components
    // i.e. Container or Grid
    return (
      <Container>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={4}>

              { /* Pass props to ProtagContainer below */ }
              <ProtagContainer />


            </Grid.Column>
            <Grid.Column width={8}>

              { /* Pass more props to Arena below */ }
              <Arena doBattle={this.doBattle} />


            </Grid.Column>
            <Grid.Column width={4}>

              { /* Pass props to AntagContainer below */ }
              <AntagContainer />


            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>

              { /* Pass props to ScoreBoard below */ }
              <ScoreBoard />


            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default App;
