import { useState } from 'react';
import LoadingSpinner from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');
  const [isLoading,setIsLoading] = useState(false);

  function saveInputText(event){
    setInputText(event.target.value);          
  }
  function handleKeyDown(event){
    event.key === "Enter" && sendMessage()
    event.key === "Escape" && 
      (event.target.value = "")
    
  }
  function clearMessages(){
    localStorage.removeItem('messages');
    setChatMessages([]);
  }
  async function sendMessage(){
    if(isLoading || inputText === ''){
      return;
    }
    setIsLoading(true);
    
    setInputText('');
    const newChatMessages = [
      ...chatMessages,
      {
        message : inputText,
        sender : "user",
        id : crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className = "chat-message-loading" src={LoadingSpinner}/>,
        sender : 'robot',
        id : crypto.randomUUID()
      }
    ]);
    const response = await (Chatbot.getResponseAsync(inputText));

    setChatMessages([
      ...newChatMessages,
      {
        message : response,
        sender : "robot",
        id : crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);
    setIsLoading(false);
  }
  
  return (
    <div className = "chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange = {saveInputText}
        onKeyDown = {handleKeyDown}
        value = {inputText}
        className = "chat-input"
      />
      <button 
        onClick = {sendMessage}
        className = "send-button"
      >
        Send
      </button> 
      <button 
        className = "clear-button"
        onClick = {clearMessages}  
      >
        Clear
      </button>
    </div>
  ); 
}