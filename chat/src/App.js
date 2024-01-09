import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/landing';
import Announce from './components/announcement';
import ChatArea from './components/chatArea';
import { Container, Card, ListGroup, InputGroup, FormControl, Image, Navbar, Nav, ButtonGroup, Button } from 'react-bootstrap';
import { LuSettings } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
function App() {
  const [activeTab, setActiveTab] = useState('home'); // State to manage active tab
  // Hardcoded messages, subtexts, and associated profile pictures for demonstration

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const [activeButton, setActiveButton] = useState('All'); // State to manage active button

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<ChatArea />} />
          <Route path="/announce" element={<Announce />} />
        </Routes>
      <div className="App">
        <div
          className={` ${activeTab !== 'home' ? 'container-animation' : ''}`}
        >
          <Navbar bg="dark"  variant="dark" className=' fixed-bottom w-100 z-index-1000' >
            <Nav className=" w-100 justify-content-evenly text-center">
              <Nav.Link
                as={Link}
                to="/"
                active={activeTab === 'home'}
                onClick={() => handleTabClick('home')}
                className={`text-center ${activeTab === 'home' ? 'theme-text border-bottom  ' : ''}`} // Center-align text in Home tab
              >
                <GoPeople />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/chat"
                active={activeTab === 'chat'}
                onClick={() => handleTabClick('chat')}
                className={`text-center ${activeTab === 'chat' ? 'border-bottom  ' : ''}`} // Center-align text in Features tab
              >
                <HiOutlinePencilSquare />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/announce'
                active={activeTab === 'announce'}
                onClick={() => handleTabClick('announce')}
                className={`text-center  ${activeTab === 'announce' ? ' border-bottom border-orange ' : ''}`} // Center-align text in Contact tab
              >
                <LuSettings />
              </Nav.Link>
            </Nav>
            
          </Navbar>
        </div>
        
      </div>
    </Router>


  );
}

export default App;
