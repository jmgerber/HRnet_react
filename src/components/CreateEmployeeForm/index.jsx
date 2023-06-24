import React, { useState } from 'react'
import { useEffect } from 'react'
import { states } from '../../data/states'
import styled from 'styled-components'
import { Modal } from 'jmgerber-modal'
import { useDispatch } from 'react-redux'
import { addNewEmployee } from '../../features/employeesList/storeSlice'

function CreateEmployeeForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [startdate, setStartdate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [selectedState, setSelectedState] = useState('AL')
  const [selectedDepartment, setSelectedDepartment] = useState('Sales')

  const dispatch = useDispatch()

  useEffect(() => {
    const stateSelect = document.getElementById('state')
    states.forEach((state) => {
      const option = document.createElement('option')
      option.value = state.abbreviation
      option.text = state.name
      stateSelect.appendChild(option)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addNewEmployee({
        firstname: firstname,
        lastname: lastname.toUpperCase(),
        birthdate: birthdate,
        startdate: startdate,
        street: street,
        city: city,
        zipcode: zipCode,
        state: selectedState,
        department: selectedDepartment,
      })
    )
  }

  return (
    <FormContainer onSubmit={(event) => handleSubmit(event)}>
      <div className='inputs-combiner'>
        <div className='input-wrapper'>
          <label htmlFor='firstname'>First Name</label>
          <input
            id='firstname'
            type='text'
            name='firstname'
            required
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            id='lastname'
            type='text'
            name='lastname'
            required
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>
      </div>
      <div className='inputs-combiner'>
        <div className='input-wrapper'>
          <label htmlFor='birthday'>Date of Birth</label>
          <input
            id='birthday'
            type='date'
            name='birthday'
            required
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='start-date'>Start Date</label>
          <input
            id='start-date'
            type='date'
            name='start-date'
            required
            onChange={(e) => setStartdate(e.target.value)}
            value={startdate}
          />
        </div>
      </div>
      <fieldset className='address'>
        <legend>Address</legend>
        <div className='input-wrapper'>
          <label htmlFor='street'>Street</label>
          <input
            id='street'
            type='text'
            name='street'
            required
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='city'>City</label>
          <input
            id='city'
            type='text'
            name='city'
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='state'>State</label>
          <select
            name='state'
            id='state'
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          ></select>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='zip-code'>Zip Code</label>
          <input
            id='zip-code'
            type='number'
            required
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
          />
        </div>
      </fieldset>
      <div className='input-wrapper'>
        <label htmlFor='department'>Department</label>
        <select
          name='department'
          id='department'
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </div>
      <Modal label={'Save'} btnClass={'save-button'}>
        <p>Employee Created!</p>
      </Modal>
    </FormContainer>
  )
}

export default CreateEmployeeForm

///// Style //////

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;

  & .input-wrapper {
    display: flex;
    flex-direction: column;
    & input {
      height: 38px;
      width: clamp(160px, 30vw + 1rem, 200px);
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      border: 2px solid #515da0;
      border-radius: 4px;
      padding-inline: 8px;
    }
    & label {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  & .address {
    border: 2px solid #515da0;
    border-radius: 4px;
    width: clamp(380px, 42vw + 1rem, 60%);
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;
    margin-block: 12px;
    & legend {
      color: #515da0;
      font-size: 1.1rem;
      font-weight: 600;
      padding-inline: 8px;
    }

    & .input-wrapper {
      width: 60%;
      margin-block: 12px;
      & input {
        width: 100%;
      }
      & select {
        height: 38px;
        border: 2px solid #515da0;
        border-radius: 4px;
        font-size: 1.1rem;
      }
    }
  }

  #department {
    width: clamp(320px, 30vw + 1rem, 50%);
    align-self: center;
    height: 38px;
    border: 2px solid #515da0;
    border-radius: 4px;
    font-size: 1.1rem;
    margin-bottom: 16px;
  }

  & .inputs-combiner {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8vw;
    margin-block: 12px;
    width: 100%;
    align-self: center;
  }

  .save-button {
    cursor: pointer;
    background-color: #515da0;
    color: #fff;
    width: clamp(320px, 30vw + 1rem, 50%);
    align-self: center;
    height: 38px;
    border-radius: 4px;
    border: 2px solid #2b3572;
    font-size: 1.1rem;
    font-weight: 600;
  }
`
