const React = require('react');

class DelayedButton extends React.Component {
  constructor () {
    super ();

    this.delay = this.delay.bind(this)
  }

  delay (event) {
    event.persist ();

    setTimeout( () => {
      this.props.onDelayedClick( event )}, this.props.delay
    );
  }

  render () {
    return (
      <button onClick={ this.delay }>Delay Button</button>
    )
  }
}

module.exports = DelayedButton;