const fs = require('fs');
const http = require('http');
const url = require('url');

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
const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  'utf-8',
);
const dataObject = JSON.parse(data);

// project manorbear tryout
const csv = require('csv-parser');

const server = http.createServer((req, res) => {
  //console.log(req.url);
  //console.log(req);

  // routing
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(data);
  } else if (pathName === '/wbl') {
    const dataWBL = [];
    fs.createReadStream(`./starter/dev-data/Pay-Table 1.csv`)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        dataWBL.push(row);
      })
      .on('end', () => {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(dataWBL, null, 2));
      });
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found. Sorry.</h1>');
  }
});

// here, the second arg is optional and would default to localhost with usually IP address: '127.0.0.1'
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
