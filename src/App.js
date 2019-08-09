import React, { Component } from 'react';
import ProtagContainer from './containers/ProtagContainer';
import AntagContainer from './containers/AntagContainer';
import Arena from './containers/Arena';
import ScoreBoard from './components/ScoreBoard';
import { Grid, Container, Button, Header } from 'semantic-ui-react'

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
      <Grid celled='internally' className='full-height'>

        {/* Left Column */}
        <Grid.Column width={4}>
          <ProtagContainer
            protags={this.state.protags}
            chooseProtag={this.chooseProtag} />
        </Grid.Column>

        {/* Middle Column, has 3 Rows */}
        <Grid.Column width={8}>
          <Grid.Row style={{height: '18%'}}>
            <Container>
              <Header as='h1' textAlign='center'>
                ARENA
              </Header>
              <Button
                color='purple'
                onClick={this.doBattle}
                fluid
                disabled={!this.state.chosenProtag.name || !this.state.chosenAntag.name}
                size='huge'>
                Fight!
              </Button>
            </Container>
          </Grid.Row>
          <Grid.Row style={{height: '57%'}}>
            <Arena
              chosenProtag={this.state.chosenProtag}
              chosenAntag={this.state.chosenAntag} />
          </Grid.Row>

          <Grid.Row style={{height: '25%'}}>
            <ScoreBoard
              winner={this.state.latestWinner}
              protagScore={this.state.protagScore}
              antagScore={this.state.antagScore} />
          </Grid.Row>
        </Grid.Column>

        {/* Right Column */}
        <Grid.Column width={4} >
          <AntagContainer
            antags={this.state.antags} />
        </Grid.Column>

      </Grid>
    );
  }

}

export default App;
