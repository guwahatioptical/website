import React, { useState } from "react";
import "../css/maincomponent.css";
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
        <div className="chat_container col-12">
          <div className="chat_section rounded col-9 col-sm-7 col-md-5">
            <div className="chat_header d-flex flex-column col-12 py-4">
              <div className="col-10 col-md-11 d-flex justify-content-end">
                <GiCrossMark
                  className="cut l"
                  onClick={() => {
                    setContact(!contact);
                  }}
                />
              </div>
              <h3 className="col-12">Say Hello</h3>
            </div>
            {sent === 0 ? (
              <form onSubmit={send}>
                <TextField
                  className="col-8 my-3"
                  id="standard-basic"
                  label="Name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                  value={name}
                />
                <TextField
                  className="col-8 my-3"
                  id="standard-basic"
                  label="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  value={email}
                />
                <TextField
                  className="col-8 my-3"
                  type="tel"
                  id="standard-basic"
                  label="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <TextField
                  className="col-8 my-3"
                  rowsMax={3}
                  size="medium"
                  multiline={true}
                  id="standard-basic"
                  label="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required={true}
                  value={message}
                />
                <button className="mt-3 mb-5" type="submit">
                  Send
                </button>
              </form>
            ) : sent === 200 ? (
              <p className="p-3 col-12">
                Thank You!
                <br />
                For your message.
                <br />
                We will soon contact you.
              </p>
            ) : (
              <p className="py-3 col-12">
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