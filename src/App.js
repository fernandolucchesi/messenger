import Chat from "./components/Chat";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto h-screen shadow-2xl px-8 pt-20">
        <ContactList />
        <div className="mt-10">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default App;
