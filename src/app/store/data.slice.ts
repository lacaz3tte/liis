
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { GetHotel } from '../interfaces';

interface DataState {
  city:string,
  date:string,
  number:number
}

const initialState = {
  data:{
    city:'Москва',
    date:new Date().toISOString().substring(0, 10),
    number:1
  }
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        rewriteData:(state,action: PayloadAction< DataState >) => {
          state.data = action.payload
        }
    }
})

export const {rewriteData} = dataSlice.actions

export const dataHotels = (state: RootState) => state.data;

export default dataSlice.reducer