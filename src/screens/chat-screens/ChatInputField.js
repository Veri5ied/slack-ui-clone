import React from 'react'
import "./ChatInputField.css"

function ChatInputField() {
    return (
        <div className="chatinputfield">
            <form>
            <input type="text" name="text" id="text"/>
            </form>
        </div>
    )
}

export default ChatInputField
