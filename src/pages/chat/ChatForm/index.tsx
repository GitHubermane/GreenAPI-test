import { useState } from "react"
import './index.scss'
import { chatSlice } from "../../../store/Chat"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
export const ChatForm = () => {
    const [number, setNumber] = useState('')
    const [err, setErr] = useState('')

    const dispatch = useAppDispatch()
    const { pushPhone } = chatSlice.actions

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.currentTarget.value)
    }
    const onPushChatIdClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const telNumLength = 11
        if (number.length === telNumLength) {
            localStorage.setItem('chatId', `${number}@c.us`)
            dispatch(pushPhone(`${number}@c.us`))
            setErr('')
        } else {
            setErr(`Длина номера должна быть ${telNumLength} символов`)
        }
    }
    return (
        <>
            <label
                className="chat-form__label"
                htmlFor="phoneNumber"
            >
                Номер телефона собеседника
            </label>
            <form className="chat-form">
                <input
                    id='phoneNumber'
                    className="chat-form__input"
                    placeholder="Введите номер собеседника"
                    type="number"
                    onChange={e => onInputChange(e)}
                />
                <button onClick={e => onPushChatIdClick(e)}>
                    Перейти к чату
                </button>
                {
                    err &&
                    <div className="chat-form__err">
                        {err}
                    </div>
                }
            </form>
        </>
    )
}