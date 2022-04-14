// function doubled(numbers) { 
//    return numbers.map( function(element) {
//       return element * 2;
//     });
//   }

// make it to the arrow function
// let doubled = numbers => {
//     numbers.map(element => {
//         return element *2;
//     })
// }
// console.log ([5,7,8]);


// function funnyCase(string) {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//       if (i % 2 === 0) newString += string[i].toLowerCase();
//       else newString += string[i].toUpperCase();
//     }
//     return newString;
//   };

//   let funnyCase = string => {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//       if (i % 2 === 0) newString += string[i].toLowerCase();
//       else newString += string[i].toUpperCase();
//     }
//     return newString;
//   };
//  console.log(funnyCase['test','hello']);

// console.log(global);

// global.test = "test";
// console.log(global.process);
// console.log(process.argv[2]);


const inquirer = require('inquirer');

inquirer
  .prompt([
      {
          type: 'input',
          name: 'UserName',
          message: 'What is your name?',
      }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.UserName);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });