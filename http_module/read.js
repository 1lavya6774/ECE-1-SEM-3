const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "index.html")

fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.error("Unable to read index.html:", err.message)
		return
	}

	console.log(data)
})
