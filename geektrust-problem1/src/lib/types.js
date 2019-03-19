

function EmptyArgumentsException(message ) {
    this.message =  'function invoked without any parameter: input ' + message
    this.name = 'Empty Arguments Exception'
    this.code = 1
}

module.exports = EmptyArgumentsException