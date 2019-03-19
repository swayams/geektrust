

function EmptyArgumentsException(message = 'function invoked without any parameter') {
    this.message = message
    this.name = 'Empty Arguments Exception'
    this.code = 1
}

module.exports = EmptyArgumentsException