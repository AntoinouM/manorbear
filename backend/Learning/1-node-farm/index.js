const fs = require('fs');
const http = require('http');

/****************************
 ******** SECTION 2 *********
 ****************************/

/* --------- FILES (part 10) ---------  */

// Blocking, synchronous way
// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textInput);

// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOutput);
// console.log('File written.');

// Non-blocking, asynchronous way
// fs.readFile('./starter/txt/start.txt', 'utf-8', (error, data1) => {
//   if (error) return console.log(error.message);
//   fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (error, data2) => {
//     console.log(data2);
//     fs.readFile('./starter/txt/append.txt', 'utf-8', (error, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         './starter/txt/final.txt',
//         `${data2}\n${data3}`,
//         'utf-8',
//         (err) => {
//           console.log('Your file has been written :)');
//         },
//       );
//     });
//   });
// });
// console.log('Will read file!');

/* --------- SERVER (part 11) ---------  */

const server = http.createServer((req, res) => {
  //console.log(req);
  res.end('Hello from the server!');
});

// here, the second arg is optional and would default to localhost with usually IP address: '127.0.0.1'
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
