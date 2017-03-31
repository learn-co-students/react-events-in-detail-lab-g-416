const React = require('react');
const ReactDOM = require('react-dom');

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getCoordinates(event) {    
    const coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);    
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>Coordinates</button>
    );
  }
}

module.exports = CoordinatesButton;