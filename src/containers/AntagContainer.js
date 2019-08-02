import React from 'react';
import Antag from '../components/Antag';
import { Container } from 'semantic-ui-react';

const AntagContainer = ({ antags }) => {


  const antagComponents = () => (
    antags.map(antag => <Antag key={antag.id} antag={antag} />)
  )

  return (
    <Container>
      <h1>Antagonists</h1>
      { antagComponents() }
    </Container>
  );
}

export default AntagContainer;
