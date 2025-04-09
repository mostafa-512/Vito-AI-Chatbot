import React from 'react';
import styles from './App.module.css';
import { useState } from 'react';
import Chat from './components/Chat/Chat.jsx';
import { Controls } from './components/Chat/Controls/Controls.jsx';

import { Assistant } from './assistants/googleAi.js';



function App() {
  const [messages, setMessages] = useState([]);
  // if you want to chose the model you can type the model name in the Brackets between double  quotes but the default model is "gemini-1.5-flash"
  // for example if you want to use "gemini-1.5-flash" model you can do it like this
  // const assistant = new Assistant("gemini-1.5-flash")
  const assistant = new Assistant();
function addMessage(message) {
  setMessages((prevMessages)=>[...prevMessages,message,]);

}

 async function handleContentRise(content) {
addMessage({role:'user',content})
  try {
    const result = await assistant.chat(content);
      addMessage({role:'assistant',content:result})
    } catch (error) {
      addMessage({role:'system',content:"Sorry It's Look Like Something happened !!. Please Try Again !!"})
 
    }
  }
  return (
    <>
  <div className={styles.App}>
    <header className={styles.Header}>
    <img src="/v.png" alt="Vito-AI-Logo" className={styles.Logo} />   
    <h2 className={styles.Title}>Vito AI Chatbot</h2>
    </header>
    <div className={styles.ChatContainer} >
      <Chat messages={messages} />
    </div>
    <Controls onSend={handleContentRise} />
    </div>      
    </>
  )
}



export default App

App.jsx
