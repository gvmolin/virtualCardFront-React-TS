import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


export const counterSlice = createSlice({
  name: 'menu',
  initialState:{
    active: false,
    index:0,
  },
  reducers: {
    toggleMenu: (state):void => {
        console.log(state)
        state.active = (state.active === true ? false : true);
        console.log(state)
    },
    selectedMenuItem: (state:any, {payload, type}):void => {
        console.log(payload)
        return {...state, index:payload}
    }
    
  },
})

export const { toggleMenu,selectedMenuItem } = counterSlice.actions

export const selectCount = (state: RootState) => state.menu.active
export default counterSlice.reducer