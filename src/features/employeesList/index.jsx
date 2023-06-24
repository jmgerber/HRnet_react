import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DataTables from '../../components/DataTables'
import { selectEmployeesList } from './storeSlice'
import { useSelector } from 'react-redux'

function EmployeeList() {
  const employeesData = useSelector(selectEmployeesList)
  return (
    <main>
      <MainContainer>
        <h2>Current Employees</h2>
        <DataTables employeesData={employeesData} />
        <Link to='/' className='home-link'>
          Home
        </Link>
      </MainContainer>
    </main>
  )
}

export default EmployeeList

/////  Style  /////

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 1.8rem;
    margin-top: 38px;
  }

  & .home-link {
    border: 1px solid #515da0;
    border-radius: 4px;
    color: #515da0;
    padding: 8px;
    font-weight: 600;
    margin-top: 16px;
  }
`
