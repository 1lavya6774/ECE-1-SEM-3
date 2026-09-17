const fs= require('fs');
fs.watch('intro.txt',(eventType,filename)=>{
    console.log(`Event Type: ${eventType}`);
    console.log(`Filename: ${filename}`);
})
setTimeout(()=>{
    watch.close()
    console.log("watcher closed")
}, 5000)