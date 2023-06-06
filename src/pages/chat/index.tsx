import { typedUseSelector } from '../../hooks/typedUseSelector'

import './index.scss'
import { Message } from '../../components/message'
import { Header } from '../../components/header'
import { MessageForm } from './MessageForm'
import { ChatForm } from './ChatForm'
import { receiveNotificationAC } from '../../store/Message/actionCreator'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export const ChatPage = () => {
    const { chatId } = typedUseSelector(state => state.chatReducer)
    const { messages } = typedUseSelector(state => state.messageReducer)

    const dispatch = useAppDispatch()

    const fetchNotification = async () => {
        //@ts-ignore
        await dispatch(receiveNotificationAC())
    }
    
    useEffect(() => {
        if (chatId) fetchNotification()
    }, [chatId])

    return (
        <>
            {
                chatId ?
                    <div className="chat-page">
                        <Header />
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
                        </div>
                        <MessageForm />
                    </div>
                    : <ChatForm />
            }
        </>
    )
}