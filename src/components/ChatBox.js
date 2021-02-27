// import React, { useState } from "react";
// import "../css/mainpage.css";
// import { RiSendPlaneFill } from "react-icons/ri";
// import { FiMessageSquare } from "react-icons/fi";
// import TextareaAutosize from "react-textarea-autosize";

// function Chat({ chat }) {
//   const bot = {
//     alignSelf: "flex-end",
//     backgroundColor: "rgb(255, 180, 157)",
//   };
//   const user = {
//     alignSelf: "flex-start",
//     backgroundColor: "rgb(255, 158, 123)",
//   };
//   return (
//     <div className="chats" style={chat.bot ? bot : user}>
//       {chat.msg}
//     </div>
//   );
// }

// function ChatBox() {
//     //   const [status, setStatus] = useState(0);
//     // const [msg, setMsg] = useState("");
//     // const [contact, setContact] = useState(false);
//     //   const [chats, setChats] = useState([
//     //   ]);
//       // const bot_msg = [
//       //   "Welcome!",
//       //   "Enter your name?",
//       //   "Please enter a valid name.",
//       //   "Enter your email?",
//       //   "Please enter a valid email",
//       //   "Enter message?",
//       //   "Thank you for giving your information.We will soon contact you",
//       // ]
      
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(status)
//       };
//     return (
//       <div>
//             <div className="message_icon" onClick={() => {
//           setContact(!contact)
//             }}>
//           <FiMessageSquare
//             style={{ fontSize: "1.7em", color: "rgb(255, 51, 0)" }}
//           />
//         </div>
//         {contact ? <div className="chat_section">
//           <div className="chat_header">Chat Box</div>
//           <div className="chat">
//             {chats.map((chat) => (
//               <Chat key={chat.msg} chat={chat} />
//             ))}
//           </div>
//           <form onSubmit={handleSubmit}>
//             <TextareaAutosize
//               maxRows="12"
//               className="input"
//               name="msg"
//               value={msg}
//               onChange={(e) => setMsg(e.target.value)}
//               placeholder="Type here"
//             />
//             <button type="submit" className="send_button">
//               <RiSendPlaneFill />
//             </button>
//           </form>
//         </div>
//  : null}
//               </div>
//     );
// }

// export default ChatBox