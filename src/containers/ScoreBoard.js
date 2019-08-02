import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react';

class ScoreBoard extends Component {

  render() {
    return (
      <Container text textAlign='center'>
      <p>Winner: {this.props.winner}</p>
      <p>Score: {this.props.protagScore} - {this.props.antagScore}</p>
      {
        this.props.protagScore === 7 ?
        <Message success>
        <p>Protagonists Wins!</p>
        </Message> :
        this.props.antagScore === 7 ?
        <Message negative>
        <p>Antagonists Wins!</p>
        </Message> :
        null
      }
      </Container>
    );
  }

}

export default ScoreBoard;
