// Home.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, deleteBook } from '../redux/actions/bookActions';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  console.log(books)
  const [reload, setReload] = useState(false); // Local state for reloading

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, reload]); // Re-fetch books when 'reload' changes

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    setReload(!reload); // Toggle reload state to re-fetch books
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-6xl font-extrabold rounded-full p-6 shadow-lg transform transition-transform duration-300 hover:scale-110">
          📚
        </div>
        <h1 className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
          Book Haven
        </h1>
        <p className="text-lg text-gray-600">
          Discover your next great read!
        </p>
      </div>
      
      <Link
        to="/add"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
      >
        Add New Book
      </Link>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books ? (
          books.map((book) => (
            <BookCard key={book._id} book={book} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No books available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
