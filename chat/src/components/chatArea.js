// src/components/chatArea.js
import React, { useState } from 'react';
import Message from './format';
import { useNavigate } from 'react-router-dom';
import App from '../App';
import { Container, Card, ListGroup, InputGroup, Form, Image, Navbar, Nav, ButtonGroup, Button } from 'react-bootstrap';

// Icons
import { FaSearch } from 'react-icons/fa'; // Importing search icon
import { RiUserSearchLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdKeyboardBackspace } from "react-icons/md";

// CSS
import '../css/chat.css';
import '../css/scroll.css';


// Images
import profile1 from '../images/profile1.png';
import profile2 from '../images/profile2.png';


const ChatArea = () => {

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
        { user:'mentor', text: 'Mentor Khaled', subtext: 'Hello, how are you?', timing: 'Sent at 10:00 AM', profile: profile1 },
        { user:'student', text: 'Mentor Suhana', subtext: 'I am fine, thank you!', timing: 'Sent at 10:05 AM', profile: profile2 },
        { user:'mentor', text: 'Mentor Trevor', subtext: 'What are you doing?', timing: 'Sent at 10:10 AM', profile: profile1 },
        { user:'student', text: 'Mentor Yemur', subtext: 'I am working on a project.', timing: 'Sent at 10:15 AM', profile: profile2 },
        { user:'mentor', text: 'Mentor Cain', subtext: 'That sounds interesting!', timing: 'Sent at 10:20 AM', profile: profile1 },
        { user:'student', text: 'Mentor Medusa', subtext: 'Yes, it is quite engaging.', timing: 'Sent at 10:25 AM', profile: profile2 },

    ];

    const navigate = useNavigate();


    return (

        <Container
            className={`theme d-flex pt-2 h-100 min-vw-100 min-vh-100 m-0 p-0 `}
        >
            <Card className=" theme text-light min-vw-100">
                <Card.Header className="text-left mt-3  d-flex flex-row">
                <div >
                        <Button className=' border-0 btn-back'
                        onClick={() => {
                            navigate('/');
                            App.setActiveTab('home');
                        }}>
                        <MdKeyboardBackspace size={'2em'} /> 
                        </Button>
                        
                        </div>
                    <div className='d-flex flex-row'>
                        <Image
                            src={profile1}
                            roundedCircle
                            width={35}
                            height={35}
                            className='mx-3'
                            style={{ objectFit: 'cover' }}
                        />
                        <div class="head">
                            <h2 className="  title">Mentor Fetch</h2>
                        </div>
                    </div>

                </Card.Header>



                <Card.Body className='max-vh-55 d-flex flex-column '>
                    <div className='messages-container mb-2 border-top border-orange pb-2 pt-3 px-0 m-0'>
                        <ListGroup variant="flush">
                            {messages.map((msg, index) => (
                                <ListGroup.Item key={index} className="theme border-0 text-light m-0 px-0 d-flex my-2 w-100">
                                    <div className='mx-2 d-flex w-100 '>
                                            <Message sender={msg.user} text={msg.subtext} /> 
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <div className=''>
                        <InputGroup className="inputBlock">
                            <Form.Control
                                placeholder="Type your message"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" 
                            className='send'>
                                Send
                            </Button>
                        </InputGroup>
                    </div>
                </Card.Body>
            </Card>
        </Container>


    );
}

export default ChatArea;