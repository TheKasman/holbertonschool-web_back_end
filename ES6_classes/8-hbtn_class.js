export default class HolbertonClass {
  constructor(size, location){
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    } 

    if (typeof location !== 'string') {      
      throw new TypeError('location must be a string');
    } 
    this._size = size;
    this._location = location;
  }
  
  get size() {
    return this._size;
  } 

  get location() {
    return this.location
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }

    return this._location;
  }
}
