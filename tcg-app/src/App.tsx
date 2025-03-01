import React from 'react';
import logo from './logo.svg';
import './styles.css';
import Sets from './components/sets';
import { Header } from './components/headerComponents';

const App:React.FC = () =>{
  return (
<div className="app-containe">
      <Header />
      <main className="main-content">
      <Sets/>
      </main>
    </div>
  );
}

export default App;
