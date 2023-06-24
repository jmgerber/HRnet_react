import { Routes, Route } from 'react-router'
import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../features/employeesList'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<CreateEmployee />} />
      <Route path='/employee-list' element={<EmployeeList />} />
    </Routes>
  )
}

export default Router
