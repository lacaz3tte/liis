
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { GetHotel } from '../interfaces';

interface favState {
  fav:GetHotel[]
}

const initialState : favState = {
    fav:[]
}

export const favSlice = createSlice({
    name:'fav',
    initialState,
    reducers:{
        add:(state,action: PayloadAction< GetHotel >) => {
          state.fav.push(action.payload)
        },
        remove:(state,action: PayloadAction< number >) => {
          state.fav = state.fav.filter((e)=>e.hotelId!==action.payload)
        },
        sort:(state,action: PayloadAction< (a:GetHotel,b:GetHotel)=>number >) => {
          state.fav = state.fav.sort(action.payload)
        }
    }
})

export const {add, remove, sort} = favSlice.actions

export const favHotels = (state: RootState) => state.fav;

export default favSlice.reducer