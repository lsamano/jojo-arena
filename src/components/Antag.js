import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const Antag = ({ antag }) => {
  return (
    <div style={{padding: '15px'}} >

      <Header as='h3'>
        <Image src={antag.avatar} alt='' avatar size='huge'/>
        { antag.name }
      </Header>
    </div>
  )
}

export default Antag;
