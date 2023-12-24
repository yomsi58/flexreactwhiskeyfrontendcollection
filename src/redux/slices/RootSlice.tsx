import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
    name: 'whiskey',
    initialState: {
        name: 'Name',
        year: 'Year',
        variety: 'Variety',
        price: 'Price'
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseVariety: (state, action) => {state.variety = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
    }
})

export const { chooseName, chooseYear, chooseVariety, choosePrice } = rootSlice.actions

export default rootSlice.reducer