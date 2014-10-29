var assert = require('assert');

describe('koaloha', function () {
  it('null이 아니어야 합니다.', function () {
    assert.ok(require('../'));
  });
  it('function이어야 합니다.', function () {
    assert.strictEqual(typeof require('../'), 'function');
  });
  it('옵션이 지정되지 않으면 예외가 발생해야 합니다.', function () {
    assert.throws(function () {
      require('../')();
    });
  });
});
