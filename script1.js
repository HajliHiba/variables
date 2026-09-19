const prompt = require('prompt-sync')();
let x1 = Number (prompt('donner la valeur de x1'))
let x2 = Number (prompt('donner la valeur de x2'))
let y1 = Number (prompt('donner la valeur de y1'))
let y2 = Number (prompt('donner la valeur de y2'))
let z1 = Number (prompt('donner la valeur de z1'))
let z2 = Number (prompt('donner la valeur de z2'))
//let a = (x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2
let a = Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2) + Math.pow(z2-z1, 2)
//let distance = a/(1/2)
let distance = Math.sqrt(a)
console.log('la distance est :' + distance)