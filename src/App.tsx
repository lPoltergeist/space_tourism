import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PageTitle from './components/PageTitle/PageTitle';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import HomePage from './pages/Home/Home';
import Technology from './pages/technology/Technology';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
     
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/technology" element={<Technology/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
