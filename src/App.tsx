import { WelcomePage } from "./pages/welcome";
import { ChatPage } from "./pages/chat";
import { useEffect } from "react";
import { loginSlice } from "./store/Login";
import { typedUseSelector } from "./hooks/typedUseSelector";
import "./App.scss"
import { useAppDispatch } from "./hooks/useAppDispatch";
import { chatSlice } from "./store/Chat";

function App() {
  const dispatch = useAppDispatch()

  const { pushIdInstance, pushApiTokenInstance } = loginSlice.actions
  const { pushPhone } = chatSlice.actions

  const localIdInstance = localStorage.getItem('idInstance')
  const localApiTokenInstance = localStorage.getItem('apiTokenInstance')
  const chatId = localStorage.getItem('chatId')

  const { idInstance, apiTokenInstance } = typedUseSelector(state => state.loginReducer)
  /*  Если в localStorage есть idInstance и apiTokenInstance,
      то их закидываем в стейт
  */
  useEffect(() => {
    if (localIdInstance && localApiTokenInstance) {
      dispatch(pushIdInstance(localIdInstance))
      dispatch(pushApiTokenInstance(localApiTokenInstance))
    }
    if (chatId) {
      dispatch(pushPhone(chatId))
    }
  }, [idInstance, apiTokenInstance, chatId]
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
