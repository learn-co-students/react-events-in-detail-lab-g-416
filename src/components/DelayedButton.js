// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
  }

  _onClick = (e) => { // if _onClick(e) {...} then bind the function in the constructor
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e),
      this.props.delay
    })
  }

  render() {
    return (
      <button onClick={this._onClick}></button>
    )
  }
}

export default DelayedButton;
