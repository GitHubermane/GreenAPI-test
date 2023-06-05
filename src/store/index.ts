import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { loginSlice } from './Login'
import { messageSlice } from './Message'
import { chatSlice } from './Chat'

export const rootReducer = combineReducers({
    loginReducer: loginSlice.reducer,
    messageReducer: messageSlice.reducer,
    chatReducer: chatSlice.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type StoreType = ReturnType<typeof setupStore>
export type DispatchType = StoreType['dispatch']