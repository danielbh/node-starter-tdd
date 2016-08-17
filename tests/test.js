/**
 * Created by danielhollcraft on 8/17/16.
 */

import sinon from 'sinon';
import chai from 'chai';
import index from '../src'

describe('call start', function () {
  it('should call start', () => {
    const spy = sinon.spy(index, 'start')
    index.start((msg) => {
      console.log(msg);
    });
    sinon.assert.called(spy)
  });
});