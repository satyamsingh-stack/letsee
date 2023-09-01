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
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '0',
    message: 'Hey there!',
    trigger: '1',
  }, {
    id: '1',
    message: 'Please write your name',
    trigger: '2'
  }, {
    id: '2',
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id:'4',
    user:true,
    trigger:'5',
  }, 
  {
    id: '5',
    options: [
      { value: 1, label: 'Login Problem' },
      { value: 2, label: 'Signup Problem' },

    ],
    end: true
  }
];

// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  floating: true,
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot

          // This appears as the header
          // text for the chat bot
          headerTitle="Chat With Satyam"
          steps={steps}
          {...config}

        />
      </ThemeProvider>
      {/* </div> */}
      {/* ); */}
      {/* <div className="App"> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="logout" element={<h1>Logout</h1>} />
            <Route path="/about" element={<About />} />
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
