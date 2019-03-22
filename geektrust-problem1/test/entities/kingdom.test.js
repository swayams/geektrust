var assert = require('assert')
const EmptyArgumentsException = require('../../src/lib/types')
const Kingdom = require('../../src/entities/Kingdom')

const senderKingdom = new Kingdom('gregory', 'peck')
const testKingdom = new Kingdom('marlyn', 'monroe')

describe('Kingdoms', function(){
    describe('#processMessage()', function(){
        it('should throw error if function is invoked without any parameters', function() {
            assert.throws(senderKingdom.processMessage, EmptyArgumentsException, "Error")
        })
    })
    describe('#sendMessage()', function(){
        it('should throws if function is invoked without any parameters', function() {
            assert.throws(senderKingdom.sendMessage, EmptyArgumentsException, "error")
        })
        it('should be added to sender kingdom\'s allies  if the message contains characters of all the kingdom\'s symbols', function() {
            senderKingdom.allies = []
            senderKingdom.sendMessage(testKingdom, 'xxxmonroexxx')
            assert.equal(senderKingdom.allies.length, 1)
        })
        it('shouldn\'t be added to sender kingdom\'s allies  if the message doesn\'t contains characters of all the kingdom\'s symbols', function() {
            senderKingdom.allies = []
            senderKingdom.sendMessage(testKingdom, 'xxxmonoexxx')
            assert.equal(senderKingdom.allies.length, 0)
        })
        it('shouldn\'t be added to sender kingdom\'s allies if its already in the kingdom\'s allies list', function() {
            senderKingdom.allies = []
            senderKingdom.sendMessage(testKingdom, 'xxxmonroexxx')
            senderKingdom.sendMessage(testKingdom, 'xxxmonroeyyy')
            assert.equal(senderKingdom.allies.length, 1)
        })
    })
})