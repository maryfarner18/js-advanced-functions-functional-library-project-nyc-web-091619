const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
  
      let keys = Object.keys(collection)
      for(let i=0; i< keys.length; i++){
        callback(collection[keys[i]], keys[i], collection)
      }
      return collection
    },

    map: function(collection, callback) {
      
      let newCollection = []
      let keys = Object.keys(collection)

      for(let i=0; i< keys.length; i++){
        newCollection[i] = callback(collection[keys[i]], keys[i], collection)
      }

      return newCollection
    },

    reduce: function(collection, callback, value=undefined) {
      let keys = Object.keys(collection)

      if(value === undefined){

        value = collection[0]
        keys.shift()
      }


      for(let i=0; i< keys.length; i++){
        value = callback(value, collection[keys[i]], collection)
      }
  
      return value

    },

    find: function(collection, predicate){
      let keys = Object.keys(collection)
      for(let i=0; i< keys.length; i++){
        if(predicate(collection[keys[i]])){
          return collection[keys[i]]
        }
      }
      return undefined

    },

    filter: function(collection, predicate){
      let newCollection = []
      let keys = Object.keys(collection)
      for(let i=0; i< keys.length; i++){
        if(predicate(collection[keys[i]])){
          newCollection.push(collection[keys[i]])
        }
      }
      return newCollection
    },

    size: function(collection){
      return Object.keys(collection).length
    },

    first: function(array, n=1){
      if(n == 1){
        return array[0]
      }

      let newArr = []
      for(let i =0; i<n; i++){
        newArr[i] = array[i]
      }
      return newArr
    },

    last: function(array, n=1){
      
      let len = array.length
      if(n == 1){
        return array[len-1]
      }
      
      let newArr = []
      for(let i=n ; i>0; i--){
        newArr.push(array[len-i])
      }

      return newArr
    },

    compact: function(arr){
      let newArr = []
      for(let i=0; i<arr.length; i++){
        if(!!arr[i]){
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    sortBy: function(array, callback){
      let newArr = [...array]
      
      if(typeof(array[0] === "number")){
        return newArr.sort((a,b) => callback(a)-callback(b))
      }
      return newArr.sort(callback)
    },

    flatten: function(array, shallow = false){
      
      let newArr = []
      if(shallow){
         array.forEach(el =>{
          if(Array.isArray(el)){
            newArr = [...newArr, ...el]
          }else{
            newArr.push(el)
          }
        })
      }else{
         array.forEach(el =>{
          if(Array.isArray(el)){
            let flatter = fi.flatten(el)
            newArr = [...newArr, ...flatter]
   
          }else{
            newArr.push(el)
          }
        })
       }
    
      return newArr
    },

    uniq: function(array, isSorted = false, callback = undefined){
      let newArr = []
      if(callback !== undefined){
        array.forEach(el =>{
          if(newArr.find(check => callback(check) === callback(el)) === undefined){
            newArr.push(el)
          }
        })
      }else{
        array.forEach(el => {
          if(!newArr.includes(el)){
            newArr.push(el)
          }
        })
      }

      return newArr
    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      let arr = []
      fi.keys(object).forEach( key  => arr.push(object[key]))
      return arr
    },  

    functions: function(object){
      let keys = fi.keys(object)

      return fi.filter(keys, key => {

        return typeof(object[key]) === "function"
      })

    }

  }

})()

fi.libraryMethod()
