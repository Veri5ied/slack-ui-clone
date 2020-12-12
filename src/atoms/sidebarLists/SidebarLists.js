import React from "react";
import db from "../../firebaseConfig";
import "./SidebarLists.css";
import { useHistory } from "react-router-dom";

function SidebarLists({ Icon, title, id, addNewChannel, selectChannel }) {
  const history = useHistory();

  const addChannel = () => {
    const newChannelName = prompt("Enter new channel: ");

    if (newChannelName) {
      db.collection("rooms").add({
        name: newChannelName,
      });
    } else {
      prompt("Channel cannot be empty")
    }
  };

  const selectChannel = () => {
    if (id) {
      history.push(`rooms/${id}`);
    } else {
      history.push(title);
    }
  };

  return (
    <div
      className="sidebarLists"
      onClick={addNewChannel ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarLists__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarLists__channels">
          <span className="sidebarLists__hashtag">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarLists;
