import { useState } from "react"
import './index.scss'
import { checkAC } from "../../store/Login/actionCreator"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { typedUseSelector } from "../../hooks/typedUseSelector"
//@ts-ignore
import spinner from "../../icons/spinner.gif"
export const WelcomePage = () => {
    const { isLoading, Error } = typedUseSelector(state => state.loginReducer)
    const [idInstance, setIdInstance] = useState('')
    const [token, setToken] = useState('')

    const dispatch = useAppDispatch()

    const onSaveDataClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(await checkAC(idInstance, token))
    }

    return (
        <div className="welcome-page">
            <h2 className="welcome-page__title">
                Добро пожаловать
            </h2>
            <form className="welcome-page__form">
                <label
                    className="welcome-page__label"
                    htmlFor="idInstance"
                >
                    idInstance
                </label>
                <input
                    id="idInstance"
                    placeholder="Введите idInstance"
                    onChange={e => setIdInstance(e.currentTarget.value)}
                />
                <label
                    className="welcome-page__label"
                    htmlFor="apiTokenInstance"
                >
                    apiTokenInstance
                </label>
                <input
                    id="apiTokenInstance"
                    placeholder="Введите apiTokenInstance"
                    onChange={e => setToken(e.currentTarget.value)}
                />
                {
                    Error &&
                    <div className="welcome-page__err">
                        {Error}
                    </div>
                }
                <button onClick={e => onSaveDataClick(e)}>
                    {
                        isLoading
                            ? <img
                                className="welcome-page__spinner"
                                src={spinner}
                            />
                            : "Войти"

                    }
                </button>
            </form>
        </div>
    )
}