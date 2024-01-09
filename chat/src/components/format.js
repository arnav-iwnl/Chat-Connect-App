// src/components/Message.js

import React from 'react';
import '../css/chat.css' // Create this CSS file for styling

const Message = ({ sender, text }) => {
  return (
    <div className={`message ${sender}`}>
      {text}
    </div>
  );
};

export default Message;
