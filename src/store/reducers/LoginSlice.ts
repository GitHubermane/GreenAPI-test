import { createSlice } from "@reduxjs/toolkit"

type loginState = {
    idInstance: string
    apiTokenInstance: string
}

const initialState: loginState = {
    idInstance: '',
    apiTokenInstance: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    }
})