import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeapons } from "./asyncActions";

import { Status, WeaponItem, WeaponSliceState } from "./types";


const initialState: WeaponSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error 
   };
   
const weaponSlice = createSlice({
    name: 'weapon',
    initialState,
    reducers: { 
      setItems (state, action: PayloadAction<WeaponItem[]>) {
          state.items = action.payload;
  },
    },
    
    extraReducers: (builder) => {
      builder.addCase(fetchWeapons.pending, (state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
  
      builder.addCase(fetchWeapons.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
    });
      builder.addCase(fetchWeapons.rejected, (state, action) => {
        state.status = Status.ERROR
        state.items = [];
  });
    } 
    // extraReducers:{
    //   [fetchWeapons.pending]: (state) => {
    //     state.status = 'loading';
    //     state.items = [];
    //   },
    //   [fetchWeapons.fulfilled]: (state, action) => {
    //     state.items = action.payload;
    //     state.status = 'success';
    //   },
    //   [fetchWeapons.rejected]: (state, action) => {
    //     state.status = 'error'
    //     state.items = [];
    //   },
    
  });
 
  
  export const {setItems} = weaponSlice.actions;
  
  export default weaponSlice.reducer;