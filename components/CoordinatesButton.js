import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(){
    super();

    this.coordinatesClick = this.coordinatesClick.bind(this);
  }

  coordinatesClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <button onClick={this.coordinatesClick}>Coords</button>
    );
  };
}

module.exports = CoordinatesButton;
