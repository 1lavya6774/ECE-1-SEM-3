import fs from 'fs';
const readStream = fs.createReadStream(new URL('./input.txt', import.meta.url));
readStream.on('data', (chunk) => {
    console.log("data recieved");
    console.log("data:", chunk)
} )
readStream.on('end', () => {
    console.log("end of file reached");
}
readStream.on('error', (error) => {
    console.error('Unable to read input.txt:', error.message);
})
writeStream.on('finish', () => {
    console.log('Data has been written to output.txt');
}
readStream.pipe(writeStream);