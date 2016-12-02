const React = require('react')

class DelayedButton extends React.Component {
  constructor () {
    super()

    this.delayedClick = this.delayedClick.bind(this)
  }

  delayedClick (event) {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render () {
    return (
      <button onClick={this.delayedClick}>Delayed</button>
    )
  }
}

module.exports = DelayedButton
