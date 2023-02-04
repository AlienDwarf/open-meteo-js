import 'mocha';
import { assert } from 'chai';
import HttpController from '../src/httpController';

describe('HttpController Get Test', () => {
  it('Should be a function', () => {
    assert.isFunction(HttpController.get);
  });
  it('Should not be null', async () => {
    HttpController.get('https://github.com/AlienDwarf/open-meteo-js').then((data) => {
      assert.isString(data);
      assert.isNotEmpty(data);
    });
  });
});
