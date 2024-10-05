const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a titile"],
            unique: true,
            trim: true,
            maxlength: [50, "Book title can't be more than 50 characters"],
        },
        subtitle: {
            type: String,
            required: [true, "Please add a subtitile"],
            trim: true,
            maxlength: [50, "Book subtitle can't be more than 50 characters"],
        },
        author: {
            type: String,
            required: [true, "Please add an author"],
            trim: true,
        },
        isbn: {
            type: String,
            required: [true, "Please add an isbn number"],
            trim: true,
            maxlength: [13, "ISBN number can't be more than 13 characters"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Book", BookSchema);