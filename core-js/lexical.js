/* ------------------------------ */


// let name = 'Alice'

// function lexical() {
//     let name = 'Bob';
//     console.log(name); // ? 

//     if (true) {
//         name = 'Charlie';
//         console.log(name); // ?
//     }
// }

// lexical();

/* ------------------------------ */



// function counter() {
//     let count = 0;

//     return function() {
//         count += 1;
//         return count;
//     }
// }

// const increment = counter();
// const incremen2 = counter();

// console.log(increment()); // ?
// console.log(increment()); // ?

// console.log(increment2()); // ?
// console.log(increment2()); // ?