const React = require('react');
const Stopwatch = require('./Stopwatch');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('div',
      {},
      React.createElement('h1', {}, 'Redux Stopwatch Demo'),
      React.createElement(Stopwatch)
    );
  }
}

module.exports = App;
