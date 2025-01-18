import React, { useState, useEffect } from 'react';
import BotHeader from "./BotHeader";
import Messages from "./Messages";
import BotInput from "./Input";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import API from './ChatbotAPi';

function ChatBotHome({onClose}){


    const [messages, setMessages] = useState([]);

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
        <div>
            <BotHeader onClose={onClose}/>
            <Messages messages={messages} />
            <BotInput onSend={send} />
            
        </div>
    )
}

export default ChatBotHome;