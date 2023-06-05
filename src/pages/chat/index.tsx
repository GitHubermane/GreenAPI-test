import { typedUseSelector } from '../../hooks/typedUseSelector'

import './index.scss'
import { Message } from '../../components/message'
import { Header } from '../../components/header'
import { MessageForm } from './MessageForm'
import { ChatForm } from './ChatForm'

export const ChatPage = () => {
    const { chatId } = typedUseSelector(state => state.chatReducer)
    const { messages } = typedUseSelector(state => state.messageReducer)
    return (
        <>
            {
                chatId 
                    ? <div className="chat-page">
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
                    : <ChatForm/>
            }
        </>
    )
}