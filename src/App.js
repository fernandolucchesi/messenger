import Chat from "./components/Chat";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { ChatContext } from "./contexts/ChatContext";
import { useContext } from "react";

function App() {
  const { showChat } = useContext(ChatContext);

  return (
    <>
      <Header />
      <div className="container mx-auto h-screen shadow-2xl px-8 pt-20">
        <h2 className="text-gray-700 py-4">Friends:</h2>
        <ContactList />
        <div className="mt-10">{showChat && <Chat name="Cognite" />}</div>
      </div>
    </>
  );
}

export default App;
