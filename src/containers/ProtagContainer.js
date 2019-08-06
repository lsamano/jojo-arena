import React from 'react';
import Protag from '../components/Protag';
import { Container, Header } from 'semantic-ui-react';

const ProtagContainer = ({ protags, chooseProtag }) => {
  const protagComponents = () => (
    protags.map(protag => (
      <Protag key={protag.id} protag={protag} chooseProtag={chooseProtag}/>)
      )
  )

  return (
    <Container>
      <Header as='h1' textAlign='center'>Protagonists</Header>
      { protagComponents() }
    </Container>
  );
}

export default ProtagContainer;
