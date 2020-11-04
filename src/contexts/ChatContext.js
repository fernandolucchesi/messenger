import React, { useState, createContext } from "react";

export const ChatContext = createContext(undefined);

function ChatContextProvider(props) {
  const [showChat, setShowChat] = useState(false);

  return (
    <ChatContext.Provider value={{ showChat, setShowChat }}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContextProvider;
