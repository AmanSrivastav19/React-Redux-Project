import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  {Header}  from './components/Header';
import { CardDetails } from './components/CardDetails';
import { Cards } from './components/Cards';

export default function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>} />
      <Route path='/cart/:id' element={<CardDetails/>} />
    </Routes>
    </BrowserRouter>
  
  );
}

 
