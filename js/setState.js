const store = require('./store');

function setState(delta, deep) {
  store.dispatch({
    type: deep ? 'DEEP_MERGE' : 'SHALLOW_MERGE',
    delta: delta
  });
}

module.exports = setState;
