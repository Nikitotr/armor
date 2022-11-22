import { configureStore } from '@reduxjs/toolkit';
import filter  from './filter/slice';
import cart from './cart/slice';
import  useReducer  from './slices/userSlice';
import weapon from './weapon/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,cart,
    weapon,
    user: useReducer
  },
  

});

export type AppDispatch = typeof store.dispatch;
export const useAppdispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
