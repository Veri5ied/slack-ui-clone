import React from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const { id } = useParams();
  return (
    <div className="chat__header">
      <h1>
        This is the chat Page
      </h1>
    </div>
  );
}

export default Chat;
