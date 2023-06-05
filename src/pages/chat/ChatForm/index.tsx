import { useState } from "react"
import './index.scss'
import { chatSlice } from "../../../store/Chat"
import { useDispatch } from "react-redux"
export const ChatForm = () => {
    const [chatId, setChatId] = useState('')

    const dispatch = useDispatch()
    const { pushPhone } = chatSlice.actions

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatId(e.currentTarget.value)
    }
    const onPushChatIdClick = () => {
        localStorage.setItem('chatId', chatId)
        dispatch(pushPhone(chatId))
    }
    return (
        <form className="chat-form">
            <input
                className="chat-form__input"
                placeholder="Введите номер собеседника"
                type="number"
                onChange={e => onInputChange(e)}
            />
            <button
                onClick={onPushChatIdClick}
            >
                Найти
            </button>
        </form>
    )
}