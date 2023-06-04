import { useState } from 'react'
import './index.scss'
import { sendMessage } from '../../api/api'
import { Message } from '../../components/message'
import { useDispatch } from 'react-redux'
import { messageSlice } from '../../store/reducers/MessageSlice'
import { messageType } from '../../types/messageType'
import { typedUseSelector } from '../../hooks/typedUseSelector'

export const ChatPage = () => {
    const { messages } = typedUseSelector(state => state.messageReducer)

    const [messageText, setMessageText] = useState('')

    const dispatch = useDispatch()
    const { pushMessage } = messageSlice.actions

    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageText(e.currentTarget.value)
    }

    const onMessageSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const today = new Date()
        const currentTime = `${today.getHours()}:${today.getMinutes()}`
        const message: messageType = {
            text: messageText,
            time: currentTime,
            isSelf: true
        }
        e.preventDefault()
        sendMessage("89215796096@c.us", messageText)
        dispatch(pushMessage(message))
        setMessageText('')
    }
    return (
        <div className="chat-page">
            <div className="chat-page__messages">
                {
                    messages.map(message => (
                        <Message
                            key={message.time}
                            text={message.text}
                            time={message.time}
                            isSelf={message.isSelf}
                        />
                    ))
                }
                {/* <Message
                    text='kek'
                    time='12:05'
                    isSelf={false}
                /> */}
            </div>

            <form className="chat-page__form" >
                <input
                    placeholder='Введите сообщение'
                    value={messageText}
                    className="chat-page__input"
                    onChange={e => onMessageChange(e)}
                />
                <button onClick={e => onMessageSend(e)}>
                    Отправить
                </button>
            </form>
        </div>
    )
}