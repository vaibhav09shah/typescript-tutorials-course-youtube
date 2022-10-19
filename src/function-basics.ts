// let greet = () => {
//     console.log('hello world')
// }

// greet = 'hello'

let greet: Function

greet = () => {
    console.log('Hello Again')
}

const add = (a: number, b: number, c?: number|string): number => {
    return a + b;
}

add(1,2)

const minus = (a: number,b: number): number => {
    return a + b
}

let result = minus(10,12)

const dontReturn = (a: number,b: number): void => {
    console.log(a+b)
}