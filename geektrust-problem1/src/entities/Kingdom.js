
require('../lib/utils')
const { EmptyArgumentsException } = require('../lib/types')

 class Kingdom {
    constructor( name, symbol ) {
        this.name = name
        this.symbol = symbol
        this.allies = []
        
    }
    
    

    processMessage(message ) {
        if( !message || message.length === 0) {
            throw new EmptyArgumentsException(message)
        }

       return message.hasAllCharsOfString(this.symbol) 

    }

    sendMessage( receiver, message) {
        if( !message || message.length === 0 || !receiver || Object.keys(receiver).length === 0) {
            throw new EmptyArgumentsException()
        }
        
        if(this.allies.indexOf(receiver) === -1) {
            if(receiver.processMessage(message)) {
                this.allies.push(receiver)
            }    
        } else {
            console.log(`${receiver.name.toCamelCase()} is already an ally of ${this.name.toCamelCase()}`)
            return false;
        }  
    } 
}

module.exports = function createKingdom( name, symbol) {
    return new Kingdom(name, symbol)
}