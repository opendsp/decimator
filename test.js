
/**
 * test
 */
import Decimator from './index';

import dbg from 'debug';

dbg('SampleRate')(sampleRate);

var test = new Decimator(1.8*100);

export function dsp(t) {
  var sine = 0.3 * Math.sin( Math.PI * 2 * t * 329);
  
  return test.run(sine);
}
