import "./index.scss"
import { loginSlice } from "../../store/Login";
//@ts-ignore
import logoutIcon from "../../icons/logout.png";
//@ts-ignore
import chatIcon from "../../icons/chat.png"
import { chatSlice } from "../../store/Chat";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const Header = () => {
    const dispatch = useAppDispatch()

    const { pushIdInstance, pushApiTokenInstance } = loginSlice.actions
    const { pushPhone } = chatSlice.actions

    const onLogoutClick = () => {
        localStorage.removeItem('idInstance')
        localStorage.removeItem('apiTokenInstance')
        dispatch(pushIdInstance(null))
        dispatch(pushApiTokenInstance(null))
        onChangeChatClick()
    }

    const onChangeChatClick = () => {
        localStorage.removeItem('chatId')
        dispatch(pushPhone(null))
    }
    return (
        <header className="header">
            <button
                className='header__btn'
                title='Выйти'
                onClick={onLogoutClick}
            >
                <img src={logoutIcon} />
            </button>
            <button
                className='header__btn'
                title="Сменить чат"
                onClick={onChangeChatClick}
            >
                <img src={chatIcon} />
            </button>
        </header>
    )
}