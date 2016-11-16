const App = require('./App');
const Provider = require('react-redux').Provider;
const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./store');

function main() {
  ReactDOM.render(
    React.createElement(
      Provider,
      {store: store},
      React.createElement(App)
    ),
    document.querySelector('.container')
  );
}

window.onload = main;
