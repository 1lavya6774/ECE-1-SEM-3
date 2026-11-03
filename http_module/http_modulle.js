import http from 'http'
import fs from 'fs'
//read file
const data=fs.readFileSync("config.json","utf8")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("home page")
    }
    else if (req.url === "/config") {
        res.end(JSON.stringify(data))
    }
    else{
        res.end("404 page not found")
    }
})
server.listen(3000,() => {
    console.log("server is running ")
})







// import http from 'http'
// const http = require("http")
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//         console.log("server is running on http://127.0.0.1:3000")
//         res.statusCode=200;
//         res.setHeader('Content-Type','text/html')
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end("hello from server")
//         fs.readFile("config.json","utf8",(err,data)=>{
//             if (err) {
//                 res.end("error")
//                 return
//             }
//             console.log(data)
//         })
//     });
  
//     server.listen(3000,"127.0.0.1",()=>{
//         console.log("server is running on http://127.0.0.1:3000")
//     });
