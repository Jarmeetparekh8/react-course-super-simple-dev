import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({chatMessages}){
  const chatMessagesRef = useAutoScroll(chatMessages);
  return (
    <div
      className = "chat-messages-container"
      ref = {chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message = {chatMessage.message}
            sender = {chatMessage.sender}
            key = {chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function useAutoScroll(dependencies){
  const componentRef = useRef(null);
  useEffect( () => {
    const containerElem = componentRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return componentRef;
}

export default ChatMessages;