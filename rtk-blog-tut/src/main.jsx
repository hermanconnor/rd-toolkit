import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import 'normalize.css';
import './index.css';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </Provider>,
);
