import Chat from "./components/Chat";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { ChatContext } from "./contexts/ChatContext";
import { ContactListContext } from "./contexts/ContactListContext";

import { useContext } from "react";

function App() {
  const { showChat } = useContext(ChatContext);
  const { contactList } = useContext(ContactListContext);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto h-screen bg-white shadow-2xl px-8 pt-20">
        <h2 className="text-gray-700 py-4">Friends:</h2>
        <ContactList />

        <div className="mt-10">
          {showChat && (
            <Chat contact={contactList.find((c) => c.id === showChat)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
