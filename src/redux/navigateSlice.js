import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navigate: {}
}

const navigateSlice = createSlice({
  name: 'navigateSlice',
  initialState,
  reducers: {
    userNavigate: (state, action) => {
     
        state.navigate = action.payload
    }
  }
});

export const {userNavigate} = navigateSlice.actions

export default navigateSlice.reducer