import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import dp from './image/dp.png'
import SidebarChat from './SidebarChat';
import db from './firebase';


function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection("rooms").onSnapshot(snapShot => {
            setRooms(snapShot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    

    return (
        <div className='sidebar'>
            <div className='sidebarHeader'>
                <div>
                    <img src={dp} alt="" />
                </div>
                <div className="sidebarHeaderRight">
                    <button style={{ border: "none" }}><span className="material-symbols-outlined">
                        auto_mode</span></button>
                    <button style={{ border: "none" }}><span className="material-symbols-outlined">
                        chat
                    </span></button>
                    <button style={{ border: "none" }}><span className="material-symbols-outlined">
                        more_vert
                    </span></button>
                </div>
            </div>
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="Search Contact" />
                </div>
            </div>
            <div className="sidebarChats">
            <SidebarChat addNewChat />
            {
                rooms.map(room => {
                    return <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                })
            }
        
            </div>
        </div>
    );
}

export default Sidebar;