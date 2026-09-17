const fs = require("fs");

function sizeChecker(filename){ 
const limit = 2*1024*1024; // 2MB limit
const stats = fs.statSync(filename);
if (stats.size > limit) {
    console.log('File is too large.');
} else {
    console.log('File size is within the limit.');
}
}

sizeChecker('./notes.txt');
