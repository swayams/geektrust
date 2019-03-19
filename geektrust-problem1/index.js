const { ListOfKingdoms } = require('./src/entities/Universe')


//problem 1

try {
    const { problem1 } = require('./src/config/input')
    const ShansKingdom = ListOfKingdoms.find(e => e.name === 'space')
    

    problem1.forEach(input => {
        
        let receiver = ListOfKingdoms.find(k => k.name.toUpperCase() === input[0].toUpperCase())
        let message = input[1]
        
        ShansKingdom.sendMessage(receiver, message)
    })

    const result = ShansKingdom.allies.length >= 3 ? "Shan is the new ruler of Westerios" : "Shan failed to get the requisite votes" 
    console.log(result)
    
} catch (error) {
    console.log(error)
    
}

