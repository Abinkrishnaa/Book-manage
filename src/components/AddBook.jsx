import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../Redux/slice/slice';

const AddBook = ({ editBook, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (editBook) {
            setTitle(editBook.title);
            setAuthor(editBook.author);
        }
    }, [editBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editBook) {
            dispatch(updateBook({ id: editBook.id, title, author }));
        } else {
            dispatch(addBook({ id: Date.now(), title, author }));
        }
        setTitle('');
        setAuthor('');
        onSubmit();
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm p-4 mb-4">
                <h4 className="text-center mb-3">{editBook ? 'Edit Book' : 'Book Name'}</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Book Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Author Name"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        {editBook ? 'Update' : 'Add Book'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
