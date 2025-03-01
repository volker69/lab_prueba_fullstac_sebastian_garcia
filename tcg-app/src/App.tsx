import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home'
import Cards from './screens/Cards';
//import CardDetal from './screens/Home'


import './styles.css';
//import Sets from './screens/Home';
//import { Header } from './components/headerComponents';

const App:React.FC = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/set/:id/card" element={<Cards />} />
    {/*    <Route path="/card/:id" element={<CardDetal />} />
 */}
      </Routes>
    </Router>
  );
}

export default App;
