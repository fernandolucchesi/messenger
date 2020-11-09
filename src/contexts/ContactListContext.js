import React, { useState, createContext } from "react";

export const ContactListContext = createContext(undefined);

function ContactListContextProvider(props) {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Cognite",
      messages: [],
    },
    {
      id: 2,
      name: "Fernando",
      messages: [],
    },
  ]);

  function setMessageForContact(id, message) {
    let newContactList = contactList.map((c) => {
      if (id === c.id) {
        let newMessages = [...c.messages];
        newMessages.push(message);
        return { ...c, messages: newMessages };
      }
      return { ...c };
    });
    setContactList(newContactList);
  }

  return (
    <ContactListContext.Provider value={{ setMessageForContact, contactList }}>
      {props.children}
    </ContactListContext.Provider>
  );
}

export default ContactListContextProvider;
