import React, { useState } from "react";
import "../css/mainpage.css";
import { GiCrossMark } from "react-icons/gi";
import { TextField } from "@material-ui/core";
import axios from "axios";

import { AiTwotoneMessage } from "react-icons/ai";
import qs from 'qs'

function ChatBox() {
  const [sent, setSent] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  let params = qs.stringify({
    name,
    email,
    phone: phone === "" ? "Not Specified" : phone,
    text: message,
  });

  const config = {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  const send = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://fd25pgyete.execute-api.us-east-1.amazonaws.com/dev/contact`,
        params,
        config
      )
      .then((res) => {
        setSent(200);
      })
      .catch((err) => {
        setSent(400);
      });

    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 500);
  };
  const [contact, setContact] = useState(false);
  const [show, setShow] = useState(false);
    const checkshow = () => {
      if (window.pageYOffset > 100) {
        setShow(true);
      } else if (window.pageYOffset <= 100) {
        setShow(false);
      }
    }
    window.addEventListener("scroll", checkshow)

  return (
    <div>
      <div
        className="message_icon"
        onClick={() => {
          setContact(!contact);
        }}
        style={{ opacity: show ? "1" : "0" }}
      >
        <AiTwotoneMessage
          style={{ fontSize: "1.7em", color: "rgb(255, 115, 0)" }}
        />
      </div>
      {contact ? (
        <div className="chat_container">
          <div className="chat_section">
            <h3 className="chat_header">
              Say Hello
              <GiCrossMark
                className="cut"
                onClick={() => {
                  setContact(!contact);
                }}
              />
            </h3>
            {sent === 0 ? (
              <form onSubmit={send}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                  value={name}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  value={email}
                />
                <TextField
                  type="tel"
                  id="standard-basic"
                  label="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <TextField
                  rowsMax={3}
                  size="medium"
                  multiline={true}
                  id="standard-basic"
                  label="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required={true}
                  value={message}
                />
                <button type="submit">Send</button>
              </form>
            ) : sent === 200 ? (
              <p>
                Thank You!
                <br />
                For your message.
                <br />
                We will soon contact you.
              </p>
            ) : (
              <p>
                Some thing went wrong! Please, check your internet connection or
                Try again later...
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ChatBox