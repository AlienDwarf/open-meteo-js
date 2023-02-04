import 'mocha';
import { assert } from 'chai';
import isNullOrEmpty from '../src/helper/isNullOrEmpty';

describe('isNullOrEmpty Tests', () => {
  it('should be function', () => {
    assert.isFunction(isNullOrEmpty);
  });
  it('{} should be true', () => {
    assert.isTrue(isNullOrEmpty({}));
  });
  it('[] should be true', () => {
    assert.isTrue(isNullOrEmpty([]));
  });
  it('"" should be true', () => {
    assert.isTrue(isNullOrEmpty(''));
  });
  it('"0" should be false', () => {
    assert.isFalse(isNullOrEmpty('0'));
  });
  it('{test:true} should be false', () => {
    assert.isFalse(isNullOrEmpty({ test: true }));
  });
  it('[1] should be false', () => {
    assert.isFalse(isNullOrEmpty([1]));
  });
});
