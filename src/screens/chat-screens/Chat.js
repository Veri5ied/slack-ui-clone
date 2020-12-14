import React from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h1>
        This is the chat Page
      </h1>
    </div>
  );
}

export default Chat;
