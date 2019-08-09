import React from 'react';
import { Container, Message } from 'semantic-ui-react';

const ScoreBoard = ({ winner, protagScore, antagScore }) => {
  return (
    <Container textAlign='center' style={{backgroundColor: 'ghostWhite', padding: '20px'}}>
      <p>Winner: {winner}</p>
      <p>Score: {protagScore} - {antagScore}</p>
      {
        protagScore === 7 ?
        <Message success>
          <p>Protagonists Win!</p>
        </Message> :
        antagScore === 7 ?
        <Message negative>
          <p>Antagonists Win!</p>
        </Message> :
        null
      }
    </Container>
  );
}

export default ScoreBoard;
