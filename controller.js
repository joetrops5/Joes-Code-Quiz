/**
 * controls quiz running
//  */

// console.log("controller working");

// let state = null;

// const getTotalQustion = () => questions.length;

// let stateTransition = {
//   null: { next: "initial", transitionfn: () => {} },
//   initial: {
//     next: "answering",
//     canTransition: (/** @type {number}*/ questionsAnswered, /** @type {number} */ timeRemaining) => {
//       //valid that inputs are only what we want
//       if ([questionsAnswered, timeRemaining].filter(Number.isNaN).length > 0) {
//         console.log("Error: one or both inputs are invalid", questionsAnswered, timeRemaining);
//         // throw "Error invalid input"
//         return;
//       }

//       if (timeRemaining <= 0 || questionsAnswered == getTotalQustion()) {
//         return true;
//       }
//     },
//   },
//   answering: {next: "completed",}
// };
