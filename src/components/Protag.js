import React, { Component } from 'react';

class Protag extends Component {
  render() {
    return (
      <div onClick={() => this.props.chooseProtag(this.props.protag)}>
        { this.props.protag.name }
      </div>
    );
  }

}

export default Protag;
