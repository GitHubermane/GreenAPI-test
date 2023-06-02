import { useState } from "react"
import './index.scss'

export const WelcomePage = () => {
    const [idInstance, setIdInstance] = useState('')
    const [token, setToken] = useState('')

    const onSaveData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        localStorage.setItem('idInstance', idInstance)
        localStorage.setItem('apiTokenInstance', token)
    }
    
    return (
        <div className="welcome-page">
            <h2 className="welcome-page__title">
                Добро пожаловать
            </h2>
            <form className="welcome-page__form">
                <label htmlFor="instance">

                </label>
                <input
                    placeholder="Введите idInstance"
                    onChange={e => setIdInstance(e.currentTarget.value)}
                />
                <input
                    placeholder="Введите apiTokenInstance"
                    onChange={e => setToken(e.currentTarget.value)}
                />
                <button onClick={e => onSaveData(e)}>
                    Войти
                </button>
            </form>
        </div>
    )
}