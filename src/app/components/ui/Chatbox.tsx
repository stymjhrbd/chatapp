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

  // const handleDeleteAll = () => {
  //   setMessages([]);
  // };

  return (
    <div className="w-full flex flex-col p-3 rounded-lg border-[1px solid #ccc] bg-gradient-to-b from-teal-500 from-10% via-teal-400 via-30% to-teal-200 to-90% " >
      <div className='h-full overflow-auto mb-3 '
      >
        {messages.map((message) => (
          <div key={message.id} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '8px' }}>
            <div className="" style={{ backgroundColor: '#009688', borderRadius: '8px', padding: '8px', maxWidth: '70%', wordWrap: 'break-word' }}>
              {message.text}

            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-centre mb-0 pb-0">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className='flex w-full mr-2 p-3 border-r-amber-50 border rounded-md outline-0'
        // style={{ flex: 1, marginRight: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', outline: 'none' }}
        />
        <button onClick={handleSendMessage} style={{ padding: '8px', margin: "4px", borderRadius: '10px', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer', outline: 'none' }}>
          Send
        </button>
        {/* <button onClick={handleDeleteAll} style={{ padding: '8px', margin: "4px", borderRadius: '6px', background: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', outline: 'none' }}>
          Delete All
        </button> */}
      </div>
    </div>
  );
};

export default ChatBox;
