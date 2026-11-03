const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader("Content-Type", "text/plain")
            res.end("Unable to read index.html")
            return
        }

        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end(data)
    })
});
const data=fs.readFileSync("index.html")
console.log(`${data}`);
server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running on port 3000")
});