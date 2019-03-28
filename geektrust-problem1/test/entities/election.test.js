var assert = require('assert')
var { ballot } = require('../../src/entities/Electon')

const { EmptyArgumentsException, InvalidArgumentsException } = require('../../src/lib/types')

describe("Election", function() {
    describe("Ballot", function() {
       
        it('should throws if function is invoked without any parameters', function() {
           
            assert.throws(ballot, EmptyArgumentsException, "error")
        })

       
    })
})