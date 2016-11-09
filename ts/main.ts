import { NumberConfig, MatesNumber } from './models/models'

let min = 3
let max = 10
let probablySign = 0.5
let divisors = [1,2,3,5,8]

for(let i = 0; i < 10; i++){
    let number:MatesNumber = new NumberConfig(min, max, probablySign, divisors).getOne()
    console.log(number.toString(), number)
}