
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


const initialState : any = {
    hotels:[]
}

export const hotelsSlice = createSlice({
    name:'hotels',
    initialState,
    reducers:{
        rewrite:(state,action: PayloadAction<any>) => {
            state.hotels = action.payload
            
        }
    }
})

export const {rewrite} = hotelsSlice.actions

export const selectedHotels = (state: RootState) => state.hotels;

export default hotelsSlice.reducer