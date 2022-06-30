import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import Home from './Layouts';
import { RegisterPage } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
