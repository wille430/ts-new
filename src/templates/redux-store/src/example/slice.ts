import { createSlice } from '@reduxjs/toolkit'
import { ExampleState } from './types'

const initialState: ExampleState = {
    queue: [],
}

export const exampleSlice = createSlice({
    name: 'CHANGE_ME',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
})

export const exampleReducer = exampleSlice.reducer
