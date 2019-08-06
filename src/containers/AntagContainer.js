import React from 'react';
import Antag from '../components/Antag';
import { Container, Header } from 'semantic-ui-react';

const AntagContainer = ({ antags }) => {


  const antagComponents = () => (
    antags.map(antag => <Antag key={antag.id} antag={antag} />)
  )

  return (
    <Container>
      <Header as='h1' textAlign='center'>Antagonists</Header>
      { antagComponents() }
    </Container>
  );
}

export default AntagContainer;
