'use strict';
const setState = require('./setState');
const store = require('./store');

let interval = null;

function start() {
  interval = setInterval(handleTick, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function handleTick() {
  const state = store.getState();
  if (state.timerSecs <= 1) {
    stop();
  }

  return setState({
    timerSecs: state.timerSecs - 1,
    isRunning: state.timerSecs > 1
  });
}

exports.start = start;
exports.stop = stop;
