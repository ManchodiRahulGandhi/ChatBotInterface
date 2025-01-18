import React, { useState, useEffect } from 'react';
import './App.css'

import botIcon from './assets/botIcon.png'
import ChatBotHome from './components/ChatBotHome';
import BotMessage from './components/BotMessage';
import UserMessage from './components/UserMessage';
import API from './components/ChatbotAPi';


function App() {
  
  const [showChatBot, setShowChatBot] = useState(false); // State to toggle visibility
  const [messages, setMessages] = useState([]);

  function handleBot() {
      setShowChatBot(!showChatBot); // Toggle the visibility of ChatBotHome
  }
  

  

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return(
     
          <div className='botIcon'>
          {showChatBot ? (
              <>
                  {/* {<button onClick={handleBot}>Close Chatbot</button>} */}
                  <br/>
                  <ChatBotHome  onClose={handleBot}/>
                  
              </>
          ) : (
              <button onClick={handleBot}>
                  <img src={botIcon} alt="Bot" />
                  <br />
                  ChatBot
              </button>
          )}
      </div>
  )
}

export default App;
