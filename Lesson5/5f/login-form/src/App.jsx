import { useState } from 'react';
import './loginForm.css';
import './App.css';

function App(){
  const [showPassword, setShowPassword] = useState(false);  
  function passwordVisibility(){
    setShowPassword((prev) => (!prev));
  }
  return(
    <>
      <p>
        Hello, welcome to my website  
      </p>
      <div>
        <input type="text" placeholder="Email" className = "input-email"/>
      </div>
      <div>
        <input 
          type = {showPassword ? "text" : "password"}
          placeholder="Password" 
          className = "input-password"
        />
        <button 
          className="password-show-button" 
          onClick={passwordVisibility}
        >
          Show
        </button>
      </div>
      <button className = "login-button">Login</button>
      <button className = "signup-button">Sign up</button>
    </>
  )
}

export default App;