import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../../firebaseConfig";
import Message from "../message/Message";
import ChatInputField from "./ChatInputField";

function Chat() {
  const [roomName, setRoomName] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data());
        });
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomName?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map((el) => (
          <Message
            message={el.message}
            timestamp={el.timestamp}
            user={el.user}
            userImage={el.userImage}
          />
        ))}
      </div>

      <ChatInputField channelName={roomName?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
