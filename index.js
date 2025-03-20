// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function beforeEach () {
    //cats.length = 0
// console.log(cats.push)
}

function destructivelyAppendCat () {
    cats.push ( "Ralph")
    console.log(cats.push)
}

function destructivelyPrependCat (){
    cats.unshift ("Bob")
        console.log (cats.unshift)
    
}function destructivelyRemoveLastCat (){
    cats.pop()
}
function destructivelyRemoveFirstCat () {
    cats.shift()
}


function appendCat () {
    return [...cats ,"Broom"]
  }
  function prependCat (){
return ["Arnold", ...cats]
 }
 function removeLastCat () {
   return  cats.slice(0,-1)
 }
 function removeFirstCat () {
    return  cats.slice(1)
  }


