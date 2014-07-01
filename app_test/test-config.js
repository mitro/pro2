var assert = chai.assert;
mocha.setup({
  ui: 'tdd'
, globals: ['Pro2']
});

requirejs(['app.test.js'])
