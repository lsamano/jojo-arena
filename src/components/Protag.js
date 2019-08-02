import React from 'react';

const Protag = ({ protag, chooseProtag }) => {
  return (
    <div onClick={ () => chooseProtag(protag) }>
      { protag.name }
    </div>
  );
}

export default Protag;
