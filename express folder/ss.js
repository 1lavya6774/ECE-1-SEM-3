app.get("/home", (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
            return;
        }

        res.send(data);
    });
});dd