import { useState, useMemo } from 'react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.employeeInfos.firstname,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.employeeInfos.lastname,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row) => row.employeeInfos.startdate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (row) => row.employeeInfos.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (row) => row.employeeInfos.birthdate,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row) => row.employeeInfos.street,
  },
  {
    name: 'City',
    selector: (row) => row.employeeInfos.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (row) => row.employeeInfos.state,
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: (row) => row.employeeInfos.zipcode,
  },
]

function FilterComponent({ onFilter, onClear, filterText }) {
  return (
    <>
      <input type='text' onChange={onFilter} value={filterText} />
      <button onClick={onClear}>✖</button>
    </>
  )
}

function DataTables({ employeesData }) {
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const fitleredEmployees = employeesData.filter(
    (employee) =>
      (employee.employeeInfos.firstname &&
        employee.employeeInfos.firstname
          .toLowerCase()
          .includes(filterText.toLowerCase())) ||
      (employee.employeeInfos.lastname &&
        employee.employeeInfos.lastname
          .toLowerCase()
          .includes(filterText.toLowerCase()))
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <DataTable
      columns={columns}
      data={fitleredEmployees}
      pagination
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  )
}

export default DataTables
