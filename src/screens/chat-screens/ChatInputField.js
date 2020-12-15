import React, { useState } from "react";
import { useStateValue } from "../../context/StoreContext";
import "./ChatInputField.css";

function ChatInputField({ channelName, channelId }) {
  const [userInput, setUserInput] = useState("");
  const [{ user }] = useStateValue();
  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chatinputfield">
      <form>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
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
