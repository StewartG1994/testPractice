function analyzeArray(array){
let finishedObject = {
    average: 0,
    min: Math.min(...array),
    max: Math.max(...array),
    length: 0
} 




let total = array.reduce((acc, cur) =>{
    return acc + cur
})

finishedObject.average = total / array.length;
finishedObject.length = array.length;



return finishedObject
}

export default analyzeArray