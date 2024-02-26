import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';
import MainPage from './Page/MainPage/MainPage.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MainPage />
  );
}

export default App;
