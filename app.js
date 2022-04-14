// var commandLineArgs = process.argv; we don't want to use this, use the process.argv.slice(2, process.argv.length);
// console.log(commandLineArgs); 

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const name = profileDataArgs[0];
const github = profileDataArgs[1];
//will be the same as // const [name, github] = profileDataArgs;


// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);


// Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };
  
// Using new arrow function syntax
//   const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
//   };

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);  // this prints [ 'Lernantino', 'Web Developer' ] on the cmd line
//   };
//   printProfileData(profileDataArgs); // this prints the same [ 'Lernantino', 'Web Developer' ] on the cmd line


// const printProfileData = profileDataArr => {
//     console.log(profileDataArr);
//   };

// const addNums = (numOne, numTwo) => numOne + numTwo;
// const sum = addNums(5, 3); // sum would be 8
// console.log(sum);

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }
//   };

// const printProfileData = profileDataArr => {
    // This...
    // for (let i = 0; i < profileDataArr.length; i += 1) {
    //   console.log(profileDataArr[i]);
    // }
    // console.log('================');
  
    // Is the same as this...
    // profileDataArr.forEach((profileItem) => {
    //   console.log(profileItem)
    // });
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };

// const generatePage = () => 'Name: Jane, Github: janehub' ;
// console.log(generatePage());

//Templage Literals are enclosed by backticks (`), below will print out one line
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));


// Multi-line Strings, below will print out 2 lines  // there are issues with this.
// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };


const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };


  console.log(name, github);
console.log(generatePage(name, github));
