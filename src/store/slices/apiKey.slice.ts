import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const API_KEY_STORAGE_KEY = 'omdb_api_key';

interface ApiKeyState {
  key: string | null;
  isModalOpen: boolean;
}

const getStoredApiKey = (): string | null => {
  try {
    return (
      localStorage.getItem(API_KEY_STORAGE_KEY) ||
      import.meta.env.VITE_OMDB_API_KEY
    );
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return null;
  }
};

const initialState: ApiKeyState = {
  key: getStoredApiKey(),
  isModalOpen: !getStoredApiKey(),
};

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
      state.isModalOpen = false;
      try {
        localStorage.setItem(API_KEY_STORAGE_KEY, action.payload);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
    clearApiKey: state => {
      state.key = null;
      state.isModalOpen = true;
      try {
        localStorage.removeItem(API_KEY_STORAGE_KEY);
      } catch (error) {
        console.error('Error removing from localStorage:', error);
      }
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {setApiKey, clearApiKey, setModalOpen} = apiKeySlice.actions;
export default apiKeySlice.reducer;
