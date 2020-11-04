import React from "react";
import { ChatContext } from "../contexts/ChatContext";
import Contact from "./Contact";
import { useContext } from "react";

function ContactList() {
  const { setShowChat } = useContext(ChatContext);

  return (
    <div className="flex">
      <Contact name="Cognite" onClick={() => setShowChat(true)} />
    </div>
  );
}

export default ContactList;
