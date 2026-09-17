const fs = require("fs")

// callback method


// create file
fs.writeFile("notes.txt", "Hello World", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("success")
})

fs.readFile("notes.txt", "utf8", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
})

//update file
const updateData = "hello ECE"
fs.appendFile("notes.txt", updateData, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file updated")
})
fs.rm("notes.txt")