import { useState } from "react"
import './index.scss'
import { check } from "../../api/api"
import { loginSlice } from "../../store/Login"
import { useDispatch } from "react-redux"

export const WelcomePage = () => {
    const [idInstance, setIdInstance] = useState('')
    const [token, setToken] = useState('')

    const dispatch = useDispatch()
    const { pushIdInstance, pushApiTokenInstance } = loginSlice.actions
    
    const onSaveDataClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const res = await check(idInstance, token)
        if (res?.data.stateInstance === "authorized") {
            dispatch(pushIdInstance(idInstance))
            dispatch(pushApiTokenInstance(token))
            localStorage.setItem('idInstance', idInstance)
            localStorage.setItem('apiTokenInstance', token)
        }
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
                <button onClick={e => onSaveDataClick(e)}>
                    Войти
                </button>
            </form>
        </div>
    )
}