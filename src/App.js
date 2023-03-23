import './App.css';
import React from 'react'
import { HashRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar'
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer'

function App() {
  return (
  <HashRouter>
    <div>
      <NavBar />
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />          
        </Routes>
      <Footer />
    </div>
  </HashRouter>
    
  );
}

export default App;
