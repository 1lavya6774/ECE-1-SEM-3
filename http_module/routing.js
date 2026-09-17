import http from 'http'
import fs from 'fs'

const home=fs.readFileSync("index.html")
const server = http.createServer((req, res) => {
    console.log("Hello world")
    console.log(req.url)
    res.end("hello from server")
    if(req.url=="/"){
        res.end("hello from home server")
        console.log(home)
    }
    if(req.url=="/about"){
        const about=fs.readFileSync("about.html")
        res.end("about page",)
        console.log(about)   }
    else if(req.url=="/contact"){
        const contact=fs.readFileSync("contact.html")
        res.end("contact page",contact)
        console.log(contact)
    }
}
)

    server.listen(3000,"127.0.0.1",()=>{
        console.log("server is running on http://127.0.0.1:3000")

    })