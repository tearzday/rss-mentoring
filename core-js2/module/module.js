// 1) CommonJS


// console.log('module.js test')

// function sum(a, b) {
//     return a + b
// }

// function pow(a, b) {
//     return a ** b
// }

// module.exports = {sum, pow}


// 2) ES6

// export function sum(a, b) {
//     return a + b
// }

// export function pow(a, b) {
//     return a ** b
// }


// 3) AMD

// define([], function() {
//     return {
//         add: function(a, b) {
//             return a + b;
//         },
//         pow: function(a, b) {
//             return a ** b;
//         }
//     };
// });


// define(['module1', 'module2'], function(module1, module2) {
//     function sum(a, b) { return a + b; }
//     return { sum };
// });

// 4) UMD

// (function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD
//         define([], factory);
//     } else if (typeof module === 'object' && module.exports) {
//         // CommonJS / Node
//         module.exports = factory();
//     } else {
//         // Глобальная переменная (browser)
//         root.myModule = factory();
//     }
// }(this, function () {
//     // Тут сама логика модуля
//     function add(a, b) {
//         return a + b;
//     }

//     function multiply(a, b) {
//         return a * b;
//     }

//     return {
//         add: add,
//         multiply: multiply
//     };
// }));



// Export default

// export default function sum(a, b) {
//     return a + b
// }

// Export as

// function sum(a, b) {
//     return a + b
// }

// export { sum as sumFn };

// For import as

// export function sum(a, b) {
//     return a + b
// }


// For import as *

// export function sum(a, b) {
//     return a + b
// }

// export function pow(a, b) {
//     return a ** b
// }



////////////////////////////////////////////////////////////////////

// For Dynamic imports

export function sum(a, b) {
    return a + b
}

export function pow(a, b) {
    return a ** b
}
