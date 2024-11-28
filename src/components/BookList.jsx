import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/slice/slice';
import AddBook from './AddBook';

const BookList = () => {
    const [editBook, setEditBook] = useState(null);
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    const handleDelete = (bookId) => {
        dispatch(deleteBook(bookId));
    };

    const handleEdit = (book) => {
        setEditBook(book);
    };

    const resetEditBook = () => {
        setEditBook(null);
    };

    return (
        <div className="container mt-4">
            <h4 className="text-center mb-3">Books</h4>
            <div className="row">
                {books.length === 0 ? (
                    <p className="text-center">No books available. Add some!</p>
                ) : (
                    books.map((book) => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">by {book.author}</p>
                                    <button
                                        className="btn btn-warning w-100 mb-2"
                                        onClick={() => handleEdit(book)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger w-100"
                                        onClick={() => handleDelete(book.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <AddBook editBook={editBook} onSubmit={resetEditBook} />
        </div>
    );
};

export default BookList;
