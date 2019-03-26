

Array.prototype.randomIndex = function () {
    return Math.floor((Math.random()*this.length))
}


function pickMessages ( AllMessages ) {
    
    const MsgArray = []
    while (MsgArray.length < 6) {
        let index = AllMessages.randomIndex()
        MsgArray.push( AllMessages[index])
        AllMessages.splice(index, 1)

    }
    return MsgArray
}


module.exports = { ballot: pickMessages }

