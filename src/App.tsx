import { WelcomePage } from "./pages/welcome";
import './App.scss'
import { ChatPage } from "./pages/chat";

function App() {

  const idInstance = localStorage.getItem('idInstance')
  const apiTokenInstance = localStorage.getItem('apiTokenInstance')
  
  return (
    <div className="App">
      {
        idInstance && apiTokenInstance 
        ? <ChatPage />
        : <WelcomePage /> 
      }
    </div>
  );
}

export default App;
