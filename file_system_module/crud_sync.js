const fs= require("fs");
fs.writeFileSync("notes.txt", "Hello, world!")
const data= fs.readFileSync("notes.txt", "utf8")
console.log(`read data: ${data}`)
fs.appendFileSync("notes.txt", "\nThis is an appended line.")
fs.rmSync("notes.txt") 