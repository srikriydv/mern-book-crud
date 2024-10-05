const Book = require('../models/Book')

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getBooks = async (req, res) =>{
    try{
        const books = await Book.find();
        res.status(201).json(books)
    } catch(error){
        res.status(400).json({ success: false, error: error.message });
    }
}

exports.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json({ success: true, message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};