import "./App.css";

// Components
import Header from "../components/Header";
import ChatInterface from "../components/ChatInterface";

function App() {
  return (
    <div className="flex flex-col h-screen bg-zinc-50 font-sans text-zinc-900">
      <Header />
      <ChatInterface />
    </div>
  );
}

export default App;
