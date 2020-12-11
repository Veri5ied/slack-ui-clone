import React, { useState, useEffect } from "react";
import SidebarLists from "../sidebarLists/SidebarLists";
import db from "../../firebaseConfig";

function SidebarChannels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar__channels">
      {channels.map((channel) => (
        <SidebarLists title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default SidebarChannels;
