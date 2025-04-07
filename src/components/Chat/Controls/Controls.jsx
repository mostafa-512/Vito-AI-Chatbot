import styles from './Controls.module.css';
import { useState } from 'react';


export function Controls({onSend}){
  const [content, setContent] = useState("");
  function handleTextarea(event) {
    setContent(event.target.value);
  }
  function handleContentSend() {
    if(content.length>0){
      onSend(content);
      setContent("");
    };
  }
  
      function HitEnter(event) {
        if(event.key === 'Enter'&& !event.shiftKey){
          event.preventDefault()
          handleContentSend()
  
        }
      }
    return(
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea placeholder="Message Vito Chatbot"
                 className={styles.TextArea}
                 value={content}
                 onChange={handleTextarea} 
                 onKeyDown={HitEnter}
                 />
            </div>

            <button className={styles.Button} onClick={handleContentSend}>
              <SendIcon/>
              </button>
        </div>
    )
};

function SendIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
      </svg>
    );
  }
  