import express from 'express'
const app =express()
const bookData=fs.readFileSync()
app.get('/api/v1/books', (req, res) => {
    res.json({
        status: "success",
        data: {bookData}
    })
})
app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})