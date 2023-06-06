import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { messageType } from "../../types/messageType"

type MessageState = {
    messages: messageType[]
}

const initialState: MessageState = {
    messages: []
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        pushMessage(state, action: PayloadAction<messageType>) {
            state.messages.push(action.payload)
        }
    }
})
