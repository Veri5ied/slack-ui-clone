import React, { useState } from "react";
import "./ChatInputField.css";

function ChatInputField({ channelName, channelId }) {
  const [userInput, setUserInput] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chatinputfield">
      <form>
        <input
          type="text"
          placeholder={`Send a message in #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={handleSend}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInputField;
