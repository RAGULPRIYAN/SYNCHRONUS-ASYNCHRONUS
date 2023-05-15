const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
//   console.log(data.toString().split('\n'))
  const newlinesCount = data.toString().split('\n').length - 1;
  console.log(newlinesCount);
});
