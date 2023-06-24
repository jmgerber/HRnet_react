import styled from 'styled-components'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import { Link } from 'react-router-dom'

function CreateEmployee() {
  return (
    <MainContainer>
      <h1>HRnet</h1>
      <Link to='/employee-list' className='employee-list-link'>
        View Current Employees
      </Link>
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
    </MainContainer>
  )
}

export default CreateEmployee

/////  Style  /////

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: #515da0;
    font-size: 3rem;
    margin-block: 24px;
  }

  & h2 {
    font-size: 1.8rem;
    margin-top: 38px;
  }

  & .employee-list-link {
    border: 1px solid #515da0;
    border-radius: 4px;
    color: #515da0;
    padding: 8px;
    font-weight: 600;
  }
`
