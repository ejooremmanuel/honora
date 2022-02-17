import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4001");
const Chat = () => {
  const [user, setuser] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({ user, message }) => {
      setChat((prevState) => [...prevState, { user, message }]);
    });
  }, []);

  const onSubmitMessage = (e) => {
    e.preventDefault();

    socket.emit("message", { user, message });
    setMessage("");
    setuser("");
  };

  const renderChat = chat.map(({ user, message }, index) => (
    <div key={index}>
      {user} : {message}
    </div>
  ));

  return (
    <div>
      <form onSubmit={onSubmitMessage}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="user"
          value={user}
          onChange={(e) => {
            setuser(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h1>Chat Log</h1>
        {renderChat}
      </div>
    </div>
  );
};

export default Chat;
