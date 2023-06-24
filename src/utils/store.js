import { configureStore } from '@reduxjs/toolkit'
import employeesListReducer from '../features/employeesList/storeSlice'

export const store = configureStore({
  reducer: employeesListReducer,
  devTools: true,
})
