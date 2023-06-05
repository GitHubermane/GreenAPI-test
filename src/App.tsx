import { WelcomePage } from "./pages/welcome";
import { ChatPage } from "./pages/chat";
import { useEffect } from "react";
import { loginSlice } from "./store/Login";
import { useDispatch } from "react-redux";
import { typedUseSelector } from "./hooks/typedUseSelector";


function App() {
  const dispatch = useDispatch()

  const { pushIdInstance, pushApiTokenInstance } = loginSlice.actions

  const localIdInstance = localStorage.getItem('idInstance')
  const localApiTokenInstance = localStorage.getItem('apiTokenInstance')

  const { idInstance, apiTokenInstance } = typedUseSelector(state => state.loginReducer)
  /*  Если в localStorage есть idInstance и apiTokenInstance,
      то их закидываем в стейт
  */
  useEffect(() => {
    if (localIdInstance && localApiTokenInstance) {
      dispatch(pushIdInstance(localIdInstance))
      dispatch(pushApiTokenInstance(localApiTokenInstance))
    }
  }, [idInstance, apiTokenInstance]
  )
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
