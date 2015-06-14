
/**
 * test
 */
import Decimator from './index';

var test = new Decimator(1.8*25);

export function dsp(t) {
  var sine = 0.3 * Math.sin( Math.PI * 2 * t * 329);
  
  return test.setFactor(1.8*((t*2)%100)).run(sine);
}
