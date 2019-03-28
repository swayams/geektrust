const Kingdom  =  require('./Kingdom')
const { Emblems } =  require('../constants/configuration')

const ListOfKingdoms = []
//initializing Kingdoms
Object.keys(Emblems).forEach(kingdom => {
    ListOfKingdoms.push(Kingdom(kingdom, Emblems[kingdom]))
});

function resetKingdoms() {
    ListOfKingdoms.forEach( k => k.allies = [])
}

module.exports = { ListOfKingdoms, resetKingdoms }