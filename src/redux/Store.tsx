import {  combineReducers, configureStore } from '@reduxjs/toolkit'
import { userInitType, userReducer } from './userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type reducersType = {
    users: userInitType
}
const persistConfig = {
    key: 'root',
    storage,
}

let reducer = combineReducers({users:userReducer});
let persistReducers = persistReducer(persistConfig ,reducer)


export const store = configureStore({
    reducer: persistReducers, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})
