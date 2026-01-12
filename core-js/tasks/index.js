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