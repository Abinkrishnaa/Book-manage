import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slice/slice';

const store = configureStore({
    reducer: {
        books: bookReducer,
    },
});

export default store;
