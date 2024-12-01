import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import Login from './components/Login';
import ScrollToTop from './components/function/ScrollTop'; 
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
      </Routes>
    </Router>
  );
}

export default App;
