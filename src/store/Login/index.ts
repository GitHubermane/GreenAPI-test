import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type loginState = {
    idInstance: string | null
    apiTokenInstance: string | null
    isLoading: boolean
    Error: string | null
}

const initialState: loginState = {
    idInstance: null,
    apiTokenInstance: null,
    isLoading: false,
    Error: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        pushIdInstance(state, action: PayloadAction<string | null>) {
            state.idInstance = action.payload
        },
        pushApiTokenInstance(state, action: PayloadAction<string | null>) {
            state.apiTokenInstance = action.payload
        },
        setIsLoading(state, atcion: PayloadAction<boolean>) {
            state.isLoading = atcion.payload
        },
        setError(state, action: PayloadAction<string | null>) {
            state.Error = action.payload
        },
    }
})