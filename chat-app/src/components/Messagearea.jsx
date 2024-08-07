/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { BiSend } from "react-icons/bi";



const messagearea = () => {

  const [messages, setMessages] = useState([
    { text: "This is a sent message", time: new Date().toLocaleTimeString() }
  ]);
  const [recMessages] = useState([
    { text: "This is a received message", time: new Date().toLocaleTimeString() }
  ]);
  const [inputValue, setInputValue] = useState('');

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const Send = () => {
    if (inputValue.trim()) {
      const newMessage = {
        text: inputValue,
        time: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      Send();
    }
  };

  return (
    <div className="flex flex-col overflow-y-auto bg-[#F4F4F4]">
      <div className="flex-1 p-4 px-8 overflow-y-auto">
        {recMessages.map((msg, index) => (
          <div key={index} className="mb-4 text-left">
            <div className="bg-[#c5e9ae] p-4 pr-10 inline-block mb-1 rounded-t-3xl rounded-br-3xl break-words whitespace-normal">
              {msg.text}
            </div>
            <div className="text-xs text-gray-700">{msg.time}</div>
          </div>
        ))}
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 text-right"> 
            <div className="bg-[#aef9fe] p-4 pl-10 inline-block mb-1 rounded-t-3xl rounded-bl-3xl break-words whitespace-normal max-w-full">
              {msg.text}
            </div>
            <div className="text-xs text-gray-900">{msg.time}</div>
          </div>
        ))}
      </div>

      <div className="w-full p-5 bg-white flex items-center border-t-2 border-black">
        <input
          type="text"
          className="flex-1 rounded p-2 mr-2 focus:outline-none"
          placeholder="Type your message..."
          value={inputValue}
          onChange={InputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="text-blue text-3xl"
          onClick={Send}
        >
          <BiSend />
        </button>
      </div>
    </div>
  )
}

export default messagearea
