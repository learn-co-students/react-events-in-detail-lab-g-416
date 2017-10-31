// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist();
    setTimeout(
      () => this.props.onDelayedClick(event),
      this.props.delay
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
      </div>
    );
  }

}
