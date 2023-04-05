import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { storeApi } from './store.api';
import hotelsReducer from './hotels.slice'
import favReducer from './fav.slice'
import dataReducer from './data.slice'

export const store = configureStore({
  reducer: {
    fav:favReducer,
    hotels:hotelsReducer,
    data:dataReducer,
    [storeApi.reducerPath]:storeApi.reducer
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(storeApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>


