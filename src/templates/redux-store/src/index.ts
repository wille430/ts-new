import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    // @ts-ignore
    reducer,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type Store = typeof store
export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
