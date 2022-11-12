import {add, subtract,multiply, divide} from './calc.js'

test('Add one', () => {
    expect(add(5,5)).toBe(10);
})

test('Add Two', () => {
    expect(add(500,54)).toBe(554);
})

test('Subtract one', () => {
    expect(subtract(500,54)).toBe(446);
})

test('Subtract Two', () => {
    expect(subtract(50,21)).toBe(29);
})

test('Multiply One', () => {
    expect(multiply(5,5)).toBe(25);
})

test('Multiply Two', () => {
    expect(multiply(10,10)).toBe(100)
})

test('Divide One', () =>{
    expect(divide(10,10)).toBe(1)
})

test('Divide Two', () =>{
    expect(divide(100,5)).toBe(20)
})