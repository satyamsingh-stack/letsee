import './App.css';
import Foot from './component/Footer';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import About from './component/About';
import Contact from './component/Contact';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import Home from './component/home/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element = {<PrivateComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="logout" element={<h1>Logout</h1>} />
            <Route path="/about" element={<About /> } />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Foot />
    </div>
  );
}

export default App;
