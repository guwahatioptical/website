import React, { useState } from "react";
import "../css/mainpage.css";
import { AiTwotoneMessage } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";

function ChatBox() {
    const [contact, setContact] = useState(false);
    return (
      <div>
        <div
          className="message_icon"
          onClick={() => {
            setContact(!contact);
          }}
        >
          <AiTwotoneMessage
            style={{ fontSize: "1.7em", color: "rgb(255, 51, 0)" }}
          />
        </div>
        {contact ? (
          <div className="chat_container">
            
            <div className="chat_section">
              <h3 className="chat_header">Message Us<GiCrossMark className="cut"
              onClick={() => {
                setContact(!contact);
              }}
            /></h3>
              <form>
                <button type="submit" className="send_button"></button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
}

export default ChatBox