// components/ChatBox.tsx
'use client'
import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
}

const ChatBox: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
      };

      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleDeleteAll = () => {
    setMessages([]);
  };

  return (
    <div style={{ width: '500px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px auto', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
      <div style={{ height: '400px', overflowY: 'auto', marginBottom: '16px', borderBottom: '1px solid #ccc' }}>
        {messages.map((message) => (
          <div key={message.id} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ backgroundColor: '#c3e6cb', borderRadius: '8px', padding: '8px', maxWidth: '70%', wordWrap: 'break-word' }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{ flex: 1, marginRight: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', outline: 'none' }}
        />
        <button onClick={handleSendMessage} style={{ padding: '8px', borderRadius: '4px', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer', outline: 'none' }}>
          Send
        </button>
        <button onClick={handleDeleteAll} style={{ padding: '8px', borderRadius: '4px', background: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', outline: 'none' }}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
