const fs=require('fs')
fs.stat("notes.txt", (err, stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("information about [notes.txt]: ",(stats));
    console.log("size of file: ", stats.size);
    console.log("creation timeof file: ", stats.birthtime.toISOString().split('M'));
})
const user={
    name: "John",
    age: 30,
    city: "New York"
}
user["name"]