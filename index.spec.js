const {expect} = require('chai');
const sequenceJobs = require('./index');

describe('sequenceJobs', () => {
  it('should return an empty string when passed an empty string', () => {
    const input = '';
    const result = sequenceJobs(input);
    const expected = '';
    expect(result).to.equal(expected);
  });
});