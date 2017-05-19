const chai = require('chai');

const expect = chai.expect;
chai.should();

let testStore;

describe('[Main] Testing mocha and chai expect', () => {
  it('should pass if mocha & chai are set up', () => {
    expect(true).to.be.true;
  })
});
