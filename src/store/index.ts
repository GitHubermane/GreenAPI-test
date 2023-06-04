import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { loginSlice } from './reducers/LoginSlice'
import { messageSlice } from './reducers/MessageSlice'

export const rootReducer = combineReducers({
    loginReducer: loginSlice.reducer,
    messageReducer: messageSlice.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type StoreType = ReturnType<typeof setupStore>