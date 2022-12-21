import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  active: Boolean
}

const initialState: CounterState = {
  active: false,
}

export const counterSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) : void => {
      state.active = (state.active === true ? false : true);
    },
    
  },
})

export const { toggleMenu } = counterSlice.actions

export const selectCount = (state: RootState) => state.menu.active
export default counterSlice.reducer