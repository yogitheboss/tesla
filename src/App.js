import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import styled from "styled-components"
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent />  
      <Footer/>    
    </div>
  );
}

export default App;
