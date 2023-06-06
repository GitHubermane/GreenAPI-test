import { typedUseSelector } from "../../../hooks/typedUseSelector"
import { messageSlice } from "../../../store/Message"
import { messageType } from "../../../types/messageType"
import { sendMessage } from "../../../api/api"
import { useState } from 'react'
import { useAppDispatch } from "../../../hooks/useAppDispatch"

export const MessageForm = () => {
    const [messageText, setMessageText] = useState('')

    const { chatId } = typedUseSelector(state => state.chatReducer)

    const dispatch = useAppDispatch()

    const { pushMessage } = messageSlice.actions


    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageText(e.currentTarget.value)
    }

    const onMessageSendClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (messageText) {
            const today = new Date()
            const currentTime = `${today.getHours()}:${today.getMinutes()}`

            const message: messageType = {
                text: messageText,
                time: currentTime,
                isSelf: true
            }
            
            if (chatId) {
                sendMessage(chatId, messageText)
                dispatch(pushMessage(message))
                setMessageText('')
            }
        }
    }

    return (
        <form className="chat-page__form" >
            <input
                placeholder='Введите сообщение'
                value={messageText}
                className="chat-page__input"
                onChange={e => onMessageChange(e)}
            />
            <button onClick={e => onMessageSendClick(e)}>
                Отправить
            </button>
        </form>
    )
}