import React, { useEffect, useState } from 'react';
import "./Chat.css"
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from './firebase';



function Chat() {

  const { roomId } = useParams();
  const [roomName, setRoomName] = useState(" ");
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");
  useEffect(() => {
    if (roomId) {
      db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
        setRoomName(snapshot.data().name);
      });

      db.collection("rooms").doc(roomId).collection("message").orderBy("timestamp", "asc").onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
    }

  }, [roomId])


  const sendMessage = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert('Please enter your message')
    }
  }

  db.collection("rooms").doc(roomId).collection("message").add({
    name: "Dhanush Kumar",
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  setInput("");

  return (
    <div className="chat">
      <div className="chatHeader">
        <img src="https://cdn-icons-png.flaticon.com/128/3011/3011270.png" alt="" />
        <div className="chatHeaderInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chatHeaderRight">
          <button style={{ border: 'none' }}><span className="material-symbols-outlined">
            search</span></button>
          <button style={{ border: 'none' }}><span className="material-symbols-outlined">
            attach_file</span></button>
          <button style={{ border: 'none' }}><span className="material-symbols-outlined">
            more_vert</span></button>
        </div>
      </div>
      <div className="chatBody">
        {
          messages.map(message => (
            <p className="chatMessage">
              <span className="chatName">{message.name}</span>
              {message.message}
              <span className="timestamp">
                {
                  new Date(message.timestamp?.seconds * 1000).toLocaleTimeString()
                }
              </span>
            </p>

          ))
        }
   </div>

   
      <div className="chatFooter">
        <span className="material-symbols-outlined">mood</span>
        <form onSubmit={sendMessage}>
          <input type="text" value={input} placeholder="Type a message" onChange={e => setInput(e.target.value)} />
          <button type="submit" style={{ border: 'none' }}>
            <span className="material-symbols-outlined">send</span>
          </button>
          <button style={{ border: 'none' }}>
            <span className="material-symbols-outlined">mic</span>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chat