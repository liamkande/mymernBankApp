import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/userAuth'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
