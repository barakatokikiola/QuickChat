import React, { useState } from "react";
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { BsSendFill } from 'react-icons/bs';
const SendMessage = ({scroll}) => {
  const [ message, setMessage ] = useState('');
 
  const sendMessage = async(event)=> {
    event.preventDefault();
    // if(message.trim() === '') {
    //   alert('Enter valid message');
    //   return;
    // }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'),{
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
    scroll.current.scrollIntoView({ behavior : 'smooth'});
  };

  return (
    <form onSubmit={(event)=>sendMessage(event)} className="send-message bg-slate-200 flex m-auto px-5 py-7 gap-3">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        id="messageInput"
        name="messageInput"
        type="text"
        className="w-full rounded-full shadow-xl drop-shadow-2xl"
        placeholder="type message..."
      />
      <button type="submit" className="text-white w-10 h-10 p-1 bg-pink-700 rounded-full">
        <BsSendFill className="flex m-auto text-xl" />
        </button>
    </form>
  );
};

export default SendMessage;
