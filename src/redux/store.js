import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlise';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducerContacts = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContacts,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
