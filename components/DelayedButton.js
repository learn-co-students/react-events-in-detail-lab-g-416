const React = require('react');
const ReactDOM = require('react-dom');

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.doTheDelay = this.doTheDelay.bind(this);
  }

  doTheDelay(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);    
  }

  render() {
    return (
      <button onClick={this.doTheDelay}>Delayed</button>
    );
  }
}

module.exports = DelayedButton;