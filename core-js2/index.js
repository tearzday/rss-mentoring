// 1) CommonJS

// синхронный
// "type": "commonjs", в package.json

// const {sum, pow} = require('./module')

// const sumResult = sum(5, 10)
// console.log(sumResult)

// const powResult = pow(5, 2)
// console.log(powResult)


////////////////////////////////////////////////////////////////////


// 2) ES6

// асинхронный
// "type": "module", в package.json

// import {sum, pow} from './module.js'


// console.log(sum(5, 10))
// console.log(sum(5, 2))


////////////////////////////////////////////////////////////////////


// 3) AMD

// require(['module'], function(module) {
//     console.log(module.add(2, 3));
//     console.log(module.pow(4, 5));
// });

// require(['module'], function(module) {
//     console.log(module.sum(2, 3)); // 5
// });



////////////////////////////////////////////////////////////////////


// UMD

// require(['module'], function(module) {
//     console.log(module.add(2, 3));
// });

// const m = require('./module');
// console.log(m.add(2, 3));


////////////////////////////////////////////////////////////////////


// Export default

// import sum from './module.js'

// console.log(sum(2, 2))

// Export as

// import { sumFn } from './module.js'

// console.log(sumFn(2, 2))

// Import as

// import { sum as sumFn } from './module.js'

// console.log(sumFn(10, 2))


// Import as *

// import * as name from './module.js';

// console.log(name.sum(5, 5))
// console.log(name.pow(5, 2))

////////////////////////////////////////////////////////////////////


// Dynamic imports


// import('./module.js').then((module) => {
//     console.log(module.sum(5, 2))
//     console.log(module.pow(5, 2))
// })




// async function load() {
//     const module = await import('./module.js')

//     console.log(module.sum(5, 2))
//     console.log(module.pow(5, 2))
// }

// load()


// body.addEventListener('click', () => {
//     import('./module.js').then(module => {
//         console.log(module.sum(5, 2))
//         console.log(module.pow(5, 2))
//     })
// })