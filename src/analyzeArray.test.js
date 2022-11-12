import analyzeArray from './analyzeArray.js'

test('Array Test One', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average : 3,
        length: 5,
        max : 5,
        min : 1
    })})


    test('Array Test Two', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average : 4,
            length: 6,
            max : 8,
            min : 1
        })})
    
    

