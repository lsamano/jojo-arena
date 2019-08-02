import React from 'react';
import { Container, Message } from 'semantic-ui-react';

const ScoreBoard = ({ winner, protagScore, antagScore }) => {
  return (
    <Container text textAlign='center'>
      <p>Winner: {winner}</p>
      <p>Score: {protagScore} - {antagScore}</p>
      {
        protagScore === 7 ?
        <Message success>
          <p>Protagonists Wins!</p>
        </Message> :
        antagScore === 7 ?
        <Message negative>
          <p>Antagonists Wins!</p>
        </Message> :
        null
      }
    </Container>
  );
}

export default ScoreBoard;
