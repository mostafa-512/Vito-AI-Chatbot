import React from 'react';
import styles from './App.module.css';
import { useState } from 'react';
import Chat from './components/Chat/Chat.jsx';
import { Controls } from './components/Chat/Controls/Controls.jsx';

import { GoogleGenerativeAI } from '@google/generative-ai';

 const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)

 const gemini = googleai.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = gemini.startChat({history:[]})

console.log(gemini);

function App() {
  const [messages, setMessages] = useState([]);

function addMessage(message) {
  setMessages((prevMessages)=>[...prevMessages,message,]);

}

 async function handleContentRise(content) {
addMessage({role:'user',content})
  try {
      const result = await chat.sendMessage(content);
      addMessage({role:'assistant',content:result.response.text()})
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
