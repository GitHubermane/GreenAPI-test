import { loginSlice } from ".";
import { DispatchType } from "..";
import { check } from "../../api/api";

export const checkAC = (idInstance: string, token: string) => async (dispatch: DispatchType) => {
    const {
        pushApiTokenInstance,
        pushIdInstance,
        setError,
        setIsLoading
    } = loginSlice.actions
    try {
        const res = await check(idInstance, token)
        dispatch(setIsLoading(true))
        if (res?.data.stateInstance === "authorized") {
            dispatch(pushIdInstance(idInstance))
            dispatch(pushApiTokenInstance(token))
            dispatch(setError(null))
            localStorage.setItem('idInstance', idInstance)
            localStorage.setItem('apiTokenInstance', token)
            dispatch(setIsLoading(false))
        } else {
            dispatch(setError("Неправильный idInstance или apiTokenInstance"))
            dispatch(setIsLoading(false))

        }
    } catch (error) {
        console.error(error);
        
    }
}