import express from 'express'
import booksRoutes from './routes/books.routes.js'

const app = express()

app.use(express.json())

app.use('/api', booksRoutes)

app.listen(3000)
console.log("Server on port", 3000)