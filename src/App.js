import React, { Component } from 'react';
import ProtagContainer from './containers/ProtagContainer';
import AntagContainer from './containers/AntagContainer';
import Arena from './containers/Arena';
import ScoreBoard from './components/ScoreBoard';
import { Container, Grid } from 'semantic-ui-react'

class App extends Component {
  state = {
    protags: [],
    chosenProtag: {},
    antags: [],
    chosenAntag: {},
    latestWinner: '',
    protagScore: 0,
    antagScore: 0
  }

  componentDidMount() {
    fetch("http://localhost:3000/jojo")
    .then(res => res.json())
    .then(data => this.setState({
      protags: data.protags,
      antags: data.antags,
      chosenAntag: this.chooseRandom(data.antags)
    }))
  }

  chooseRandom = array => {
    return array[Math.floor( Math.random() * array.length )]
  }

  chooseProtag = protag => {
    this.setState({
      chosenProtag: protag
    })
  }

  doBattle = event => {
    Math.floor(Math.random() * 2) === 0 ? this.protagWins() : this.antagWins();
  }

  protagWins = () => {
    const oneLessAntag = this.state.antags.filter(antag => antag.id !== this.state.chosenAntag.id)
    this.setState({
      protagScore: this.state.protagScore + 1,
      latestWinner: this.state.chosenProtag.name,
      antags: oneLessAntag,
      chosenAntag: this.chooseRandom(oneLessAntag) || {}
    })
  }

  antagWins = () => {
    const oneLessProtag = this.state.protags.filter(protag => protag.id !== this.state.chosenProtag.id)
    this.setState({
      antagScore: this.state.antagScore + 1,
      latestWinner: this.state.chosenAntag.name,
      protags: oneLessProtag,
      chosenProtag: {}
    })
  }

  render() {
    return (
      <Container>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProtagContainer
              protags={this.state.protags}
              chooseProtag={this.chooseProtag} />
            </Grid.Column>

            <Grid.Column width={8}>
            <Arena
              chosenProtag={this.state.chosenProtag}
              chosenAntag={this.state.chosenAntag}
              doBattle={this.doBattle}  />
            </Grid.Column>

            <Grid.Column width={4}>
            <AntagContainer
              antags={this.state.antags} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <ScoreBoard
                winner={this.state.latestWinner}
                protagScore={this.state.protagScore}
                antagScore={this.state.antagScore} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default App;
