import { configureStore } from '@reduxjs/toolkit';
import { hospitalApi } from '../services/hospitalApi';
import { authApi } from '../services/authApi'; // ← bunu ekle
import uiReducer from "../store/uiSlice/uiSlice";
import hospitalReducer from "../store/hospitalSlice/hospitalSlice";
import authReducer from "../store/authSlice/authSlice";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [hospitalApi.reducerPath]: hospitalApi.reducer,
    [authApi.reducerPath]: authApi.reducer, 
    hospital: hospitalReducer,
    ui: uiReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      hospitalApi.middleware,
      authApi.middleware 
    ),
});

setupListeners(store.dispatch);
