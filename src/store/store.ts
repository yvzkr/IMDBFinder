import {configureStore} from '@reduxjs/toolkit';
import {mediaService} from '../services/media.service';
import apiKeyReducer from './slices/apiKey.slice';

const store = configureStore({
  reducer: {
    [mediaService.reducerPath]: mediaService.reducer,
    apiKey: apiKeyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mediaService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
