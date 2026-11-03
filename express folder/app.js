import express from 'express'
import fs from 'fs'

const app = express()

app.use(express.json())

const FILE = './data/books.json'

const readBooks = () => {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'))
}

const writeBooks = (books) => {
    fs.writeFileSync(FILE, JSON.stringify(books, null, 2))
}

app.post('/api/v1/books', (req, res) => {

    const books = readBooks()

    const newBook = {
        id: Date.now(),
        title: req.body.title,
        author: req.body.author
    }

    books.push(newBook)

    writeBooks(books)

    res.status(201).json({
        status: "Success",
        message: "Book added successfully",
        data: newBook
    })
})

app.get('/api/v1/books', (req, res) => {

    const books = readBooks()

    res.status(200).json({
        status: "Success",
        results: books.length,
        data: {
            books: books
        }
    })
})


app.put('/api/v1/books/:id', (req, res) => {

    const books = readBooks()

    const id = Number(req.params.id)

    const index = books.findIndex(book => book.id === id)

    if (index === -1) {
        return res.status(404).json({
            status: "Fail",
            message: "Book not found"
        })
    }

    books[index] = {
        ...books[index],
        title: req.body.title ?? books[index].title,
        author: req.body.author ?? books[index].author
    }

    writeBooks(books)

    res.status(200).json({
        status: "Success",
        message: "Book updated successfully",
        data: books[index]
    })
})


app.delete('/api/v1/books/:id', (req, res) => {

    const books = readBooks()

    const id = Number(req.params.id)

    const index = books.findIndex(book => book.id === id)

    if (index === -1) {
        return res.status(404).json({
            status: "Fail",
            message: "Book not found"
        })
    }

    const deletedBook = books.splice(index, 1)

    writeBooks(books)

    res.status(200).json({
        status: "Success",
        message: "Book deleted successfully",
        data: deletedBook[0]
    })
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})