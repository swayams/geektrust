require('../../src/lib/utils')
const assert =  require('assert')

describe('utils', function() {
  describe('#hasAllCharsOfString() 1', function() {
    it('should return true when string has all the character of provided string', function() {
      const strings = ['oaaawaala', 'owl']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), true, "passes");
    });
  });
  describe('#hasAllCharsOfString() 2 ', function() {
    it('should return true when string has all the character of provided string', function() {
      const strings = ['zmzmzmzaztzozh', 'mammoth']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), true, "passes");
    });
  }); 
  describe('#hasAllCharsOfString() 3 ', function() {
    it('should return true when string has all the character of provided string', function() {
      const strings = ['a1d22n333a4444p ', 'panda']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), true, "passes");
    });
  }); 
});