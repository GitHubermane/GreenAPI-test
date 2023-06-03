import { useState } from 'react'
import './index.scss'
import { sendMessage } from '../../api/api'
import { Message } from '../../components/message'

//@ts-ignore
// import mailsend from '../../icons/mailsend.svg'

export const ChatPage = () => {
    const [message, setMessage] = useState('')

    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onMessageSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        sendMessage("89215796096@c.us", message)
        setMessage('')
    }
    return (
        <div className="chat-page">
            <div className="chat-page__messages">
                <Message />
            </div>

            <form className="chat-page__form" >
                <input
                    placeholder='Введите сообщение'
                    value={message}
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