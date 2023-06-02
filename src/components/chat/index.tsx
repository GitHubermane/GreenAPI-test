import { useState } from 'react'
import './index.scss'
//@ts-ignore
// import mailsend from '../../icons/mailsend.svg'

export const Chat = () => {
    const [message, setMessage] = useState('')
    
    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onMessageSend = () => {

    }
    return (
        <div className="chat">
            <form className="chat__form" >
                <input
                    className="chat__input"
                    onChange={e => onMessageChange(e)}
                />
                <button
                    onClick={onMessageSend}
                >
                    <img />
                </button>
            </form>
        </div>
    )
}