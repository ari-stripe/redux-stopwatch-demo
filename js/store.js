const merge = require('lodash/merge');
const redux = require('redux');

const initialState = {
  timerSecs: 0,
  isRunning: false
};

function reducer(state, action) {
  if (state == null) {
    state = initialState;
  }

  switch (action.type) {
    case 'SHALLOW_MERGE':
      return Object.assign({}, state, action.delta);
    case 'DEEP_MERGE':
      return merge({}, state, action.delta);
    default:
      return state;
  }
}

module.exports = redux.createStore(reducer);
