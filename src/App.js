import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto h-screen shadow-2xl px-12 pt-20">
        <ContactList />
      </div>
    </>
  );
}

export default App;
