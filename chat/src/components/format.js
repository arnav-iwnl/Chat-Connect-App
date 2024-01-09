// src/components/Message.js

import React from 'react';
import '../css/chat.css' // Create this CSS file for styling

const Message = ({ sender, text }) => {
 const justifyContent = sender === 'mentor' ? 'flex-start' : 'flex-end';
  return (
    <div className={`d-flex w-100 justify-content-${justifyContent}`}>
      <div className={`message ${sender}`}>
        {text}
      </div>
    </div>
  );
};

export default Message;
