import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Blog from './screens/Blog';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
}

export default App;


function Home() {
  return (
    <div className="home">
      <Header />
    </div>
  )
}