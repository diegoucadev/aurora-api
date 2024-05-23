import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllBooks = async (req, res) => {
    const books = await prisma.book.findMany()
    res.json(books)
}

export const createBook = async(req, res) => {
    const newBook = await prisma.book.create({data: req.body})
    res.json(newBook)
}