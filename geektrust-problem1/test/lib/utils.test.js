require('../../src/lib/utils')
const assert =  require('assert')

describe('utils', function() {
  describe('#hasAllCharsOfString() ', function() {
    it('should return true when string has all the characters of provided string', function() {
      const strings = ['oaaawaala', 'owl']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), true, "passes");
    });
    it('should return true when string has all the characters of provided string', function() {
      const strings = ['zmzmzmzaztzozh', 'mammoth']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), true, "passes");
    });
    it('should return true when string has all the characters of provided string', function() {
      const strings = ['a1d22n333a4444p ', 'panda']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), true, "passes");
    });
    it('should return false when string doesnt have all the characters of provided string', function() {
      const strings = ['a1d22n333a4444p ', 'pandax']
      assert.equal(strings[0].hasAllCharsOfString(strings[1]), false, "passes");
    });
  });
 
});