import React from "react";
import { ChatContext } from "../contexts/ChatContext";
import { ContactListContext } from "../contexts/ContactListContext";
import Contact from "./Contact";
import { useContext } from "react";

function ContactList() {
  const { setShowChat } = useContext(ChatContext);
  const { contactList } = useContext(ContactListContext);

  return (
    <div className="flex">
      {contactList.map((contact) => (
        <div key={contact.id} className="p-2">
          <Contact
            name={contact.name}
            onClick={() => setShowChat(contact.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactList;
