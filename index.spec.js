const {expect} = require('chai');
const sequenceJobs = require('./index');

describe('sequenceJobs', () => {
  it('should return an empty string when passed an empty array', () => {
    const input = '';
    const result = sequenceJobs(input);
    const expected = [];
    expect(result).to.eql(expected);
  });
  it('should take a string containing a single character representing a task return that character in an array', () => {
    const input = 'a';
    const result = sequenceJobs(input);
    const expected = ['a'];
    expect(result).to.eql(expected);
  });
  it('should take a string containing comma seperated characters representing a sequence of independent tasks and return the characters in an array', () => {
    const input = 'a,b,c';
    const result = sequenceJobs(input);
    const expected = ['a', 'b', 'c'];
    expect(result).to.eql(expected);
  });
  it('should take a string containing a character represnting a task with dependent tasks denoted by a dash and return the tasks in the order in which they must be completed; ie if task a depends on task b then the sequence array should have task b before task a', () => {
    const input = 'a-b,b';
    const result = sequenceJobs(input);
    const expected = ['b', 'a'];
    expect(result).to.eql(expected);
  });
  it('should handle multiple dependent tasks and independent tasks', () => {
    const input = 'a-b,b,c,d-a,e-d,f,g,h-i,i-c,j-l,k-j,l-h';
    const result = sequenceJobs(input);
    const expected = ['b', 'c', 'f', 'g', 'i', 'a', 'd', 'e', 'h','l','j','k'];
    expect(result).to.eql(expected);
  });
});