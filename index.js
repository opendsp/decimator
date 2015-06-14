
/**
 * @module Decimator
 * @author potasmic
 * @org opendsp
 * @desc Downsampler
 * @version 0.0.1
 */
/*
* Learn more about down-sampling: https://en.wikipedia.org/wiki/Decimation_(signal_processing)
*/
 
export default Decimator

function Decimator ( factor ) {
  if(!(this instanceof Decimator)) return new Decimator(factor);
  this.factor = factor > 1? factor: 4;
  this.currentValue = 0;
  this.tillNextSample = 0;
}

Decimator.prototype.run = function(input) {
  if ( this.tillNextSample > 0 ) {
    this.tillNextSample--;
    return this.currentValue;
  } else {
    this.tillNextSample = this.factor;
    this.currentValue = input;
    return input;
  }
}

Decimator.prototype.setFactor = function(f) {
  this.factor = f;
  return this;
}