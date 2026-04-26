export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessasge() {
    throw new Error('Class extending Building must override evacuationWarningMessasge');
  }

  get sqft() {
    return this._sqft;
  }
}
