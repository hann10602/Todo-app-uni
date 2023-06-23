import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import All from './pages/All';
import Pending from './pages/Pending';
import Completed from './pages/Completed';

function App() {
  return (
    <div className="App bg-sky-300 w-full h-screen flex justify-around">
      <div className='mt-[128px]'>
      <Routes>
        <Route path='/' element={<Layout><All/></Layout>}/>
        <Route path='/pending' element={<Layout><Pending/></Layout>}/>
        <Route path='/completed' element={<Layout><Completed/></Layout>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
