import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type chatState = {
    chatId: string | null
}

const initialState: chatState = {
    chatId: null
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        pushPhone(state, action: PayloadAction<string | null>) {
            state.chatId = action.payload
        },
    }
})