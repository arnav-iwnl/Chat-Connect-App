// src/components/landing.js
import React, { useState } from 'react';
import { Container, Card, ListGroup, InputGroup, FormControl, Image, Navbar, Nav, ButtonGroup, Button} from 'react-bootstrap';

// Icons
import { FaSearch } from 'react-icons/fa'; // Importing search icon
import { RiUserSearchLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";

// CSS
import '../css/chat.css';
import '../css/scroll.css';


// Images
import profile1 from '../images/profile1.png';
import profile2 from '../images/profile2.png';



const Landing = () => {
  const [activeTab, setActiveTab] = useState('home'); // State to manage active tab
  // Hardcoded messages, subtexts, and associated profile pictures for demonstration

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [activeButton, setActiveButton] = useState('All'); // State to manage active button
  
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };


// Hardcoded messages, subtexts, and associated profile pictures for demonstration
const messages = [
  { text: 'Mentor Khaled', subtext: 'Hello, how are you?', timing: 'Sent at 10:00 AM', profile: profile1 },
  { text: 'Mentor Suhana', subtext: 'I am fine, thank you!', timing: 'Sent at 10:05 AM', profile: profile2 },
  { text: 'Mentor Trevor', subtext: 'What are you doing?', timing: 'Sent at 10:10 AM', profile: profile1 },
  { text: 'Mentor Yemur', subtext: 'I am working on a project.', timing: 'Sent at 10:15 AM', profile: profile2 },
  { text: 'Mentor Cain', subtext: 'That sounds interesting!', timing: 'Sent at 10:20 AM', profile: profile1 },
  { text: 'Mentor Medusa', subtext: 'Yes, it is quite engaging.', timing: 'Sent at 10:25 AM', profile: profile2 },

];


  return (
    
    <Container
    className={`theme d-flex flex-column justify-content-evenly min-vw-100 min-vh-100  p-0 ${activeTab !== 'home' ? 'container-animation' : ''}`}
>
    <Card className=" theme text-light mw-100 vh-25">
        <Card.Header className="text-left py-3">
            <h3 className="mb-0 fs-2 ">Contact Area</h3>
        </Card.Header>



        <Card.Body className='max-vh-25'>

            <div>
                <InputGroup className="mb-4">
                    <FormControl className='rounded-pill fs-6 fw-normal' placeholder="Search your mentor" />
                    <Button className='mx-2 px-4 rounded-pill text-dark bg-white border-0'><RiUserSearchLine /></Button>
                </InputGroup>
            </div>

            <div>
                <h2 className="mb-4 text-center">Announcements</h2>
                <div className="mb-4 border-bottom"></div> {/* Line underneath the title */}
            </div>



            <div>
                <ButtonGroup className="mb-3">
                    <Button
                        variant={activeButton === 'All' ? 'light' : 'theme'} // Set variant based on activeButton
                        className={` mx-2 px-4 rounded mr-2 ${activeButton === 'All' ? 'text-dark' : 'text-white'}`} // Conditional styling          variant={activeButton === 'All' ? 'dark' : 'light'}
                        onClick={() => handleButtonClick('All')}
                    >
                        All
                    </Button>
                    <Button
                        className={`rounded ${activeButton === 'Personal' ? 'text-dark' : 'text-white'}`} // Conditional styling
                        variant={activeButton === 'Personal' ? 'light' : 'theme'}
                        onClick={() => handleButtonClick('Personal')}
                    >
                        Personal
                    </Button>
                </ButtonGroup>
            </div>





            <div className='messages-container'>
                <ListGroup variant="flush">
                    {messages.map((msg, index) => (
                        <ListGroup.Item key={index} className="theme text-light d-flex my-2">
                            <Image
                                src={msg.profile}
                                roundedCircle
                                width={50}
                                height={50}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className='mx-2 w-100 '>
                                <div>{msg.text}</div>
                                <div className='d-flex justify-content-between flex-row'>
                                    <div className="text-secondary text-sm-start" style={{ fontSize: '0.9em' }}>{msg.subtext}</div>
                                    <div className='text-sm-end text-secondary' style={{ fontSize: '0.6em' }}>{msg.timing}</div>
                                 </div>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>



        </Card.Body>
        <div>
            <Navbar bg="dark" variant="dark" className=' position-sticky m-0' >
                <Nav className=" w-100 justify-content-evenly text-center">
                    <Nav.Link
                        href="#home"
                        active={activeTab === 'home'}
                        onClick={() => handleTabClick('home')}
                        className={`text-center ${activeTab === 'home' ? 'theme-text border-bottom  ' : ''}`} // Center-align text in Home tab
                    >
                        <GoPeople />
                    </Nav.Link>
                    <Nav.Link
                        href="#write"
                        active={activeTab === 'write'}
                        onClick={() => handleTabClick('write')}
                        className={`text-center ${activeTab === 'write' ? 'border-bottom  ' : ''}`} // Center-align text in Features tab
                    >
                        <HiOutlinePencilSquare />
                    </Nav.Link>
                    <Nav.Link
                        href="#settings"
                        active={activeTab === 'settings'}
                        onClick={() => handleTabClick('settings')}
                        className={`text-center  ${activeTab === 'settings' ? ' border-bottom border-orange ' : ''}`} // Center-align text in Contact tab
                    >
                        <LuSettings />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>





    </Card>
</Container>

   

  );
};

export default Landing;
