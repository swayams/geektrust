
(function() {
    String.prototype.hasAllCharsOfString = function hasCharactersOfString  (str)  {
        let thisArr = this.split('')
        let strArr = str.split('')
        let isValid = true
        strArr.every( el => {
          const index = thisArr.indexOf(el)    
          if(index === -1) {
            isValid = false
            return false
            
          } else {
            thisArr.splice(index, 1)
            return true
          }
        })  
       return isValid
       
    }

    String.prototype.toCamelCase = function capitalizeFirstCharacter () {
      return this.charAt(0).toUpperCase() + this.slice(1)
    }

    
})()



  