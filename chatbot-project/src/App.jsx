import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID : ${crypto.randomUUID()}`;
      }
    })
  }, []);
  useEffect(() => {     
      localStorage.setItem('messages', JSON.stringify(chatMessages));
    }
  , [chatMessages]);
  
  // Array Destructuring of React.useState() = [variable value1 of array, variable value2 of array] = array returning
  // React.useState gives array which has two value. first is the updated data and 
  // second is updater function which update the updated data in HTML

  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className = "app-container">
      
      {chatMessages.length === 0 
        && (
          <div className = "welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below
          </div>
        )
      }
    
      {
        chatMessages.length > 0
        && (
          <ChatMessages
          chatMessages = {chatMessages}  
          />
        )
      }
        <ChatInput 
          chatMessages = {chatMessages}
          setChatMessages = {setChatMessages} 
        />

    </div>
  );

}

export default App
