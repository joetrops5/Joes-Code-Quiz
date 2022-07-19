/** @typedef {{key,value}} Option */
/** @type {{ text, answer, number, options:Option[]}[]} */

const questions = [
  {
    number: 1,
    text: "which is a way to describe a javascript variable?",
    answer: "D",
    options: {
      A: "using var",
      B: "using let",
      C: "using const",
      D: "all of the above",
    },
  },
  {
    number: 2,
    text: 'In JavaScript, if i say the var= "5"; what is 5 in this instance?',
    answer: "A",
    options: {
      A: "String",
      B: "Boolean",
      C: "Number",
      D: "All of the Above",
    },
  },
  {
    number: 3,
    text: "In Javascript, you can use either double or single quotations",
    answer: "A",
    options: {
      A: "True",
      B: "False",
    },
  },
  {
    number: 4,
    text: "How do you externally link a CSS stylesheet ?",
    answer: "B",
    options: {
      A: ' Put <link rel="stylesheet" href="style.css"> into HTML body',
      B: ' Put <link rel="stylesheet" href="style.css"> into HTML head',
      C: ' Put <link ="style.css"> anywhere in the HTML',
      D: " You can't link a CSS stylesheet externally",
    },
  },
  {
    number: 5,
    text: " In HTML, what does <p> stand for?",
    answer: "C",
    options: {
      A: "Page",
      B: "Point",
      C: "Paragraph",
      D: "Part",
    },
  },
];
