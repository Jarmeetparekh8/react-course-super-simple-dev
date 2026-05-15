import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage({message, sender}){
  // const {message, sender} = props; its shortcut is in parameter of this function

  return (
    // && operator is if statement, value1 && value2, if value1 is true then result is value2
    <div 
      className = {
        sender === "user" 
        ? 'chat-message-user' 
        : 'chat-message-robot'
      }
    >
      {sender === "robot" && (
        <img src ={RobotProfileImage} className = "chat-message-profile"/>
      )}
      <div className = "chat-message-text">
        {message}
      </div>
      {sender === "user" && (
        <img src ={UserProfileImage} className = "chat-message-profile"/>
      )}
    </div>
  );
}