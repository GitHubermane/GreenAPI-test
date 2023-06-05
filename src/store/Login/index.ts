import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type loginState = {
    idInstance: string | null
    apiTokenInstance: string | null
}

const initialState: loginState = {
    idInstance: null,
    apiTokenInstance: null,
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
        }

    }
})