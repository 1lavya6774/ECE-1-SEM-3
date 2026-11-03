import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
    console.log("Hello world")
    console.log(req.url)
    if (req.url === "/") {
        res.end("home page")
    }
    else if (req.url === "/about") {
        res.end("about page")
    }
    else if (req.url === "/contact") {
        res.end("contact page")
    }
    else if (req.url === "/projects"){
        res.end("projects page")
    } 
else {
    res.end("404 page not found")
        res.end("404 page not found")
    }
})
Server.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})