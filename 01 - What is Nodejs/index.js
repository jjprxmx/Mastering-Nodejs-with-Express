
console.log('Hello Node.js');

// Logging global objects
console.log("Logging global objects");
console.log(global);
console.log("test");
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log("test");
console.log(exports);
console.log("module.exports==exports");
console.log(module.exports==exports);
console.log("module.exports===exports");
console.log(module.exports===exports);


const fs = require('fs'); //common js
// import fs from 'fs'; esmodule สามารถใช้ได้เเต่จะต้องเซ็ตค่า 

//Non-blocking IO not wait
console.log("Non-blocking IO");
fs.readFile('./data.js', 'utf8', (err, content) => {
    console.log(content);
})
console.log("finish Non-blocking IO");
//blocking IO wait
console.log("blocking IO");
const content = fs.readFileSync(
'./data.js',
'utf8'
);
console.log(content);
console.log("finish blocking IO");