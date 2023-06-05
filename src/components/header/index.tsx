import "./index.scss"
//@ts-ignore
import logoutIcon from "../../icons/logout.png";
import { loginSlice } from "../../store/Login";
import { useDispatch } from "react-redux";

export const Header = () => {
    const dispatch = useDispatch()
    
    const { pushIdInstance, pushApiTokenInstance } = loginSlice.actions
    const onLogoutClick = () => {
        localStorage.removeItem('idInstance')
        localStorage.removeItem('apiTokenInstance')
        dispatch(pushIdInstance(null))
        dispatch(pushApiTokenInstance(null))
    }

    return (
        <header className="header">
            <button
                className='header__logout-btn'
                title='Выйти'
                onClick={onLogoutClick}
            >
                <img src={logoutIcon} alt="" />
            </button>

        </header>
    )
}