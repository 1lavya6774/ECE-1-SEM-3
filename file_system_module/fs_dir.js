const fs= require('fs')
fs.mkdir("./myFolder", (err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("folder created");
})
fs.writeFile("./myFolder/notes.txt", "Hello World", (err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("file created");
})  
fs.readdir("./myFolder", (err, files)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("directory contents: ", files);
})