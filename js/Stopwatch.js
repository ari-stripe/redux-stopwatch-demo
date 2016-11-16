const React = require('react');
const connect = require('react-redux').connect;
const formatTime = require('./formatTime');
const identity = require('lodash/identity');
const setState = require('./setState');
const timer = require('./timer');

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    [
      'handleMinute',
      'handleSec',
      'startTimer',
      'resetTimer'
    ].forEach(handler => {
      this[handler] = this[handler].bind(this);
    });
  }

  render() {
    const mins = Math.floor(this.props.timerSecs / 60);
    const secs = this.props.timerSecs % 60;
    const colorClass = this.props.timerSecs < 60 ? 'color-red' : 'color-green';
    return React.createElement(
      'div',
      {className: `stopwatch ${colorClass}`},
      formatTime(mins, secs),
      React.createElement('div', {className: 'button-panel'}, [
        React.createElement('button', {onClick: this.handleMinute}, 'M'),
        React.createElement('button', {onClick: this.handleSec}, 'S'),
        React.createElement('button', {onClick: this.startTimer}, 'Start'),
        React.createElement('button', {onClick: this.resetTimer}, 'Reset')
      ])
    );
  }

  handleMinute() {
    setState({timerSecs: this.props.timerSecs + 60});
  }

  handleSec() {
    setState({timerSecs: this.props.timerSecs + 1});
  }

  startTimer() {
    timer.start();
  }

  resetTimer() {
    timer.stop();
    setState({timerSecs: 60});
  }
}

module.exports = connect(identity)(Stopwatch);
