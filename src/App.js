import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Board from './components/Board';
import Nationals from './components/Nationals';
import Membership from './components/Membership';






function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Board" element={<Board />}/>
          <Route path="/Membership" element={<Membership />}/>
          <Route path="/Nationals" element={<Nationals />}/>
          <Route path="/Events" element={<Events />}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;