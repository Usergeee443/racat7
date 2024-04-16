import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './App';
import UserList from './components/userList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserList />
    <User />
  </React.StrictMode>
);
