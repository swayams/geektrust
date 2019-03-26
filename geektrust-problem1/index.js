const { ListOfKingdoms } = require('./src/entities/Universe')
const { VotesToWin } = require('./src/constants/configuration')




try {
    
    //problem 1
    const { problem1 } = require('./src/constants/input')
    const ShansKingdom = ListOfKingdoms.find(e => e.name === 'space')
    problem1.forEach(input => {
        
        let receiver = ListOfKingdoms.find(k => k.name.toUpperCase() === input[0].toUpperCase())
        let message = input[1]
        
        ShansKingdom.sendMessage(receiver, message)
    })

    const result = ShansKingdom.allies.length >= VotesToWin ? 
                    "Shan is the new ruler of Westerios" : 
                    "Shan failed to get the requisite votes" 
    console.log(`Problem 1: ${result}`)
        
    //problem 2
    var { problem2 } = require('./src/constants/input')
    
    const { ballot } = require('./src/entities/Electon')
    

    let claimants = []
    problem2.claimants.forEach( c => 
        ListOfKingdoms.array.forEach( k => 
            { 
               k.name.toUpperCase() === c.toUpperCase() ? claimants.push(k) : ''
            }
        )
    )
    // const otherKingdoms = ListOfKingdoms.filter( kingdom => 
    //     claimants.filter( c => 
    //         c.toUpperCase() === kingdom.name.toUpperCase()).length === 0
    // )



    
    console.log(claimants)

} catch (error) {
    console.log(error)
    
}




