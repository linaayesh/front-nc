import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import Home from './Layouts';
import HomePage from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
