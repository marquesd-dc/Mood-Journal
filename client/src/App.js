import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';

import Header from './components/Header';
import EntryForm from './components/EntryForm';
import Container from './components/Container';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Container/>} />
          <Route path='/entryform' element={<EntryForm />} />
          <Route path='/qotd' element={<Quote />} />

        </Routes>
    </div>
  );
}

export default App;
