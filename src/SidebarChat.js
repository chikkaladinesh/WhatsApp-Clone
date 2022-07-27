import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {
  
  const [seed, setSeed] = useState("");

  useEffect(() =>{
    setSeed(Math.floor(Math.random() * 5000))
  },[])

const createChat=()=>{
  const room = prompt("please enter room name.");
  if(room)
  {
    db.collection("rooms").add({
      name:room
    })
  }
}

  return (
    !addNewChat ? (
      <Link to={`/room/${id}`}>
    <div className='sidebarChat'>
    eslint-disable-next-line
     <img src={`https://cdn-icons-png.flaticon.com/128/3011/3011270/${seed}.png alt=" "`}></img>
        <div className="sidebarChatInfo">
            <h2>{name}</h2>
            <p>Last Message</p>
        </div>
    </div>
      </Link>
    
  ):(
    <div className="sidebarChat" onClick={createChat}>
        <h3>Add New Chat</h3>
    </div>
  )
  );
}
export default SidebarChat;
