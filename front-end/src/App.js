import './App.css';
import Foot from './component/Footer';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="logout" element={<h1>Logout</h1>} />
          <Route path="/about" element={<About /> } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Foot />
    </div>
  );
}

export default App;
