import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import HomePage from './pages/Home/Home';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Crew/>
    </div>
  );
}

export default App;
