let arr = [[1,12,3,[4,[5,[10,[2],45,[7,2,[23],"mo"]]],6],7],8]
let depth = 0

function getArrayDepth(array){
    if(Array.isArray(array)){
        ++depth
        for(let i=0;i<array.length;i++){
            if(Array.isArray(array[i])) {
                arr = arr.flat()
                getArrayDepth(arr)  
            }
        }
        return ` depth = ${depth}`
    }
    return console.log(`NOT Araay`)
}

console.log(getArrayDepth(arr))

