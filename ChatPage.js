// src/components/ChatPage.js
import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, fromUser: true }]);
      setMessage('');
      // Simulate a response from the service provider
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Thank you for your message. We will get back to you soon.', fromUser: false }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1>Chat with Service Provider</h1>
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.fromUser ? 'message user' : 'message provider'}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;