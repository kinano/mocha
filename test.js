const assert = require('assert');
const Car = require('./car');
let car;

beforeEach(() => {
    car = new Car();
});

describe('Car Tests', () => {
    it('parks', () => {
        assert.equal(car.park(), 'stopped');
    });
    it('drives', () => {
        assert.equal(car.drive(), 'vroom');
    })
});