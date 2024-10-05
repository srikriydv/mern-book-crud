// BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden transition transform hover:scale-105">
      <div className="flex-grow p-4">
        <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
        <p className="text-gray-600">{book.subtitle}</p>
        <p className="text-gray-500 mt-2">Author: {book.author}</p>
        <p className="text-gray-500">ISBN: {book.isbn}</p>
      </div>
      <div className="flex justify-between p-4 bg-gray-100">
        <Link
          to={`/edit/${book._id}`}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-md shadow hover:shadow-lg transition duration-300"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(book._id)}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-md shadow hover:shadow-lg transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
