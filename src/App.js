import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Quote from './components/Quote';
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
