// AddEditBook.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from '../redux/actions/bookActions';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditBook = () => {
  const { id } = useParams(); // Get book id from URL if editing
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    author: '',
    isbn: '',
  });

  useEffect(() => {
    if (id) {
      const bookToEdit = books.find((book) => book._id === id);
      if (bookToEdit) setFormData(bookToEdit); // Prepopulate form for edit
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editBook(id, formData)); // Edit book
    } else {
      dispatch(addBook(formData)); // Add new book
    }
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {id ? 'Edit Book' : 'Add Book'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {['title', 'subtitle', 'author', 'isbn'].map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">{field}</label>
            <input
              type="text"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          {id ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddEditBook;
