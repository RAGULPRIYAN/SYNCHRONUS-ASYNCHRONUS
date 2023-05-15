const fs = require('fs');

const filePath = process.argv[2]; 
// get the file path from command-line argument

const fileContent = fs.readFileSync(filePath); // read the file contents synchronously

const newlinesCount = fileContent.toString().split('\n').length-1; // count the number of newlines in the file

console.log(newlinesCount); // output the number of newlines to the console

// const fs = require('fs');

// const filePath = process.argv[2];

// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// //   console.log(data.toString().split('\n'))
//   const newlinesCount = data.toString().split('\n').length - 1;
//   console.log(newlinesCount);
// });
