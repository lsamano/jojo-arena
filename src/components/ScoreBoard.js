import React from 'react';
import { Container, Message } from 'semantic-ui-react';

const ScoreBoard = props => {
  return (
    <Container text textAlign='center'>
      <p>Winner: {/* Latest Winning Fighter */}</p>
      <p>Score: {/* Protagonists Score */} - {/* Antagonists Score */}</p>
      {
        /* Conditionally render a Message when one side wins */
      }
    </Container>
  );
}

export default ScoreBoard;
