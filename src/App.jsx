// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Provider store={store}>
        <div>
            <Header />
            <div className="container">
                <AddBook />
                <BookList />
            </div>
            <Footer />
        </div>
    </Provider>
);

export default App;
