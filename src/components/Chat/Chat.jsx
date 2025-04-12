import Markdown from 'react-markdown';
import styles from './Chat.module.css';
import { useEffect, useMemo, useRef } from 'react';

const WELCOME_MESSAGE_Group = [
  {
    role:'assistant',
    content: 'Hello, I am Vito AI. How can I help you today?'
  },
]





function Chat({messages}) {
  const divToEndOfChat = useRef(null);
  const messageGroup = useMemo(
    ()=>
    // Group the messages by user and assistant
    messages.reduce((groups,messages)=>{
      if(messages.role === 'user') groups.push([]);
      groups[groups.length -1].push(messages);
      return groups;
      },[])
  ,[messages])
  useEffect(()=>{
    const lastMessage = messages[messages.length -1];
    if (lastMessage?.role === 'user'){
      divToEndOfChat.current?.scrollIntoView({ behavior: 'smooth' });
    }
  },[messages])


  return (
<>
<div className={styles.Chat}>
{[WELCOME_MESSAGE_Group, ...messageGroup].map((messages,groupIndex)=>(
  // Group the messages by user and assistant
  // Group the messages by user and assistant
  <div key={groupIndex} className={styles.Group}>

    {messages.map(({role,content},index) =>(
      // Render the messages in the group
      // Render the messages in the group
      <div key={index} data-role={role} className={styles.Message} >
        <Markdown>{content}</Markdown>
      </div>
    ))}

  </div>
)) }

<div  ref={divToEndOfChat}/>
</div>


</>


  )
 }
export default Chat;