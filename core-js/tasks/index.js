// Custom setTimeout Implementation: Implement a custom version of setTimeout using only Date and a while loop, without using the native setTimeout function.


// function customSetTimeout(callback, delay) {
//     const time = Date.now()
//     let currentTime = 0

//     while(currentTime < time + delay) {
//         currentTime = Date.now()
//     }

//     callback()
// }

// customSetTimeout(() => {console.log('yes')}, 3000)


// Memoization Function: Create a function that implements memoization to cache and return the results of expensive function calls.


// function memoSum() {
//     const cache = {}

//     return function(a, b) {
//         const key = `${a}${b}`

//         if(!cache[key]) {
//             cache[key] = a + b
//             console.log("It is don't cache value")
//         }

//         return cache[key]
//     }
// }

// const sum = memoSum()
// console.log(sum(1, 2))
// console.log(sum(5, 2))
// console.log(sum(1, 2))


// Universal memo

// function memoization(callback) {
//     const cache = {}

//     return function () {
//         const key = JSON.stringify(...arguments)

//         if(!cache[key]) {
//             cache[key] = callback(...arguments) 
//             console.log("It is don't cache value")
//         }

//         return cache[key]
//     }
// }

// const sum = (a, b) => a + b

// const memoSum = memoization(sum)

// console.log(memoSum(1, 2))
// console.log(memoSum(5, 2))
// console.log(memoSum(1, 2))


//Arguments Reverser: Implement a function that reverses the order of arguments it receives, returning a new function with reversed arguments.

// const pow = (a, b) => a ** b


// function reversArg(fn) {
//     return function(...args) {
//         return fn(...args.reverse())
//     }
// }

// const powRevers = reversArg(pow)
// console.log(powRevers(3, 2))
// console.log(pow(3, 2))