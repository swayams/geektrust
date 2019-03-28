

Array.prototype.randomIndex = function () {
    return Math.floor((Math.random()*this.length))
}


function pickRandomMessages ( AllMessages, count ) {
    
    const MsgArray = [], all = Array.from(AllMessages)
    while (MsgArray.length < count) {
        let index = all.randomIndex()
        MsgArray.push( all[index])
        all.splice(index, 1)

    }

    return MsgArray
}

const { ListOfKingdoms } = require('./universe')

function processCandidates(names) {

    ListOfKingdoms.forEach(k => k.allies = [])

    const claimants = [], nonClaimants = [] 
    ListOfKingdoms.forEach(k => {
        if(names.indexOf(k.name) === -1) nonClaimants.push(k)
        else claimants.push(k)
    })

    return {claimants, nonClaimants}
}

function processMessagesForClaimant(claimant, msgs, voters) {
   
    let index = 0
    while (msgs.length > 0) {
        //since messages are inherently random, they can be sequentially sent to the voters.
        let msgIndex  = msgs.length > 1 ?   msgs.randomIndex() : 0

        let msg  = msgs[msgIndex]
        

        let voter = voters[index ++]

        if(!msg || msg.length === 0) 
            console.log("error occoured  ", msgIndex)

        claimant.sendMessage(voter, msg)

        if( index == voters.length -1) index = 0
        msgs.splice(msgIndex, 1)

    }
}

function chooseRuler(kingdoms) {
   const AlliesList = []
   kingdoms.forEach(k => AlliesList.push(k.allies.length))

   const mostAllies = Math.max(...AlliesList)
   return kingdoms.filter(k => k.allies.length === mostAllies)
       
}

const { MsgCount } = require('../constants/configuration')
const { EmptyArgumentsException, InvalidArgumentsException } =  require('../lib/types')

function ballot( electionControls ) {


    if( !electionControls.claimants || !electionControls.claimants.length === 0 
        || !electionControls.messages || !electionControls.messages.length === 0 ){
            throw new EmptyArgumentsException("Election - Please make sure that Messages and Claimants exist and are non-empty. ")
            return;
        }
    
    if( electionControls.messages.length < 6) {
        throw new InvalidArgumentsException()
        return
    }
    
    const { claimants, nonClaimants } = processCandidates(electionControls.claimants)

    claimants.forEach(c => 
        {
            let msgs = pickRandomMessages(electionControls.messages, MsgCount)                 
            processMessagesForClaimant(c, msgs, nonClaimants)
        }
    )

   const Ruler = chooseRuler(claimants)

  
   if( Ruler.length === 1 && Ruler[0].allies.length > 0 ) {
        console.log(`Problem 2: ${Ruler[0].name.toCamelCase()} is the Ruler of Westeros` )
        return;
    } else {
        console.log(`Problem 2: No clear Winner, Retrying ... `)
        ballot(electionControls)
    }

}


module.exports =  { ballot: ballot } 

