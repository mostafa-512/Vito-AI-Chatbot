import styles from './Controls.module.css';
import { useEffect, useState,useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';


export function Controls({isDisabled=false,onSend}){
  const [content, setContent] = useState("");

  const textareaReef  = useRef(null);
useEffect (() => {
  if (!isDisabled) {
    textareaReef.current.focus(); 
    
  }
}

,[isDisabled])

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
            <div className={styles.TextAreaContainer }>
                <TextareaAutosize  placeholder="Message Vito Chatbot"
                 className={styles.TextArea}
                 value={content}
                 onChange={handleTextarea} 
                 onKeyDown={HitEnter}
                 minRows={1}
                 maxRows={4}
                 disabled={isDisabled}
                 ref={textareaReef}
      
                 />
            </div>

            <button className={styles.Button}
             onClick={handleContentSend}
             disabled={isDisabled}
             >
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
  