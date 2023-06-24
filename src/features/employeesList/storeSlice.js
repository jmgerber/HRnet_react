import { createSlice, nanoid } from '@reduxjs/toolkit'

const employeesListSlice = createSlice({
  name: 'employeesList',
  initialState: [],
  reducers: {
    addNewEmployee: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (employeeInfos) => {
        const id = nanoid()
        return { payload: { id, employeeInfos } }
      },
    },
  },
})

// Exporting actions
export const { addNewEmployee } = employeesListSlice.actions

// Exporting reducer
export default employeesListSlice.reducer

// Exporting selectors
export const selectEmployeesList = (state) => state
