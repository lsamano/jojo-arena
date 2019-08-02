import React from 'react';
import Protag from '../components/Protag';
import { Container } from 'semantic-ui-react';

const ProtagContainer = ({ protags, chooseProtag }) => {
  const protagComponents = () => (
    protags.map(protag => (
      <Protag key={protag.id} protag={protag} chooseProtag={chooseProtag}/>)
      )
  )

  return (
    <Container>
      <h1>Protagonists</h1>
      { protagComponents() }
    </Container>
  );
}

export default ProtagContainer;
