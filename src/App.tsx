import { WelcomePage } from "./pages/welcome";
import './App.scss'
import { MainPage } from "./pages/main";

function App() {

  const idInstance = localStorage.getItem('idInstance')
  const apiTokenInstance = localStorage.getItem('apiTokenInstance')
  
  return (
    <div className="App">
      {
        idInstance && apiTokenInstance 
        ? <MainPage />
        : <WelcomePage /> 
      }
    </div>
  );
}

export default App;
