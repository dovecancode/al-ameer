// import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Table, TableContainer } from '@mui/material'
import { useState } from 'react'
// import ameerServices from '../../../services/ameerServices'
import DashTableBody from '../../shared/DashTableBody'
import DashTableHead from '../../shared/DashTableHead'
import DashToolBar from '../DashToolBar'
import doctorsData from './data'

function DoctorDataTable() {
  // const [doctor, setDoctor] = useState([])
  // const [errorMessage, setErrorMessage] = useState('')
  // const [status, setStatus] = useState('idle')
  const [selectedItems, setSelectedItems] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  function handleQuery(q) {
    setSearchQuery(q)
  }

  function handleClickAllItems(e) {
    if (e.target.checked) {
      const selectAll = doctorsData.map((data) => data.patientID)
      setSelectedItems(selectAll)
      return
    }
    setSelectedItems([])
  }

  // select all items with checkbox
  function isSelected(id) {
    return selectedItems.indexOf(id) !== -1
  }

  function handleClickSelectedItem(id) {
    const selectedIndex = selectedItems.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedItems, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedItems.slice(1))
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelected = newSelected.concat(selectedItems.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedItems.slice(0, selectedIndex),
        selectedItems.slice(selectedIndex + 1)
      )
    }
    setSelectedItems(newSelected)
  }

  const header = [
    'Doctor ID',
    'Doctor Name',
    'Gender',
    'Specialization',
    'Date of Birth',
    'Address',
    'Phone Number',
    'Email',
    'Affiliation',
    // 'Available',
    'Schedule',
    'Number of Patients',
    '',
  ]

  const columns = [
    { field: 'doctorID', label: 'ID' },
    { field: 'doctorName', label: 'Name' },
    { field: 'gender', label: 'Gender' },
    { field: 'specialization', label: 'Specialization' },
    { field: 'dateOfBirth', label: 'Date of Birth' },
    { field: 'address', label: 'Address' },
    { field: 'phoneNumber', label: 'Phone Number' },
    { field: 'email', label: 'Email' },
    { field: 'hospitalAffiliation', label: 'Affiliation' },
    // { field: 'isAvailable', label: 'Available' },
    { field: 'shiftTiming', label: 'Schedule' },
    { field: 'patients', label: 'Number of Patients' },
  ]

  const backgroundColor = '#159EEC'

  // useEffect(() => {
  //   async function fetchData() {
  //     setStatus('loading')
  //     try {
  //       const { data, error } = await ameerServices.getData('doctors')
  //       if (error) {
  //         setErrorMessage('Something when wrong...')
  //       }
  //       if (error) throw new Error(error)
  //       setDoctor(data)
  //       setStatus('success')
  //     } catch (error) {
  //       setStatus('error')
  //     }
  //   }
  //   fetchData()
  // }, [])

  // console.log(status)
  // console.log(doctor)

  // const error = status === 'error'

  // if (error) return <h1>{errorMessage}</h1>

  return (
    <>
      <TableContainer>
        <DashToolBar
          selectedItems={selectedItems}
          query={searchQuery}
          onQuery={handleQuery}
        />
        <Table>
          <DashTableHead
            columnHeader={header}
            bgcolor={backgroundColor}
            selectAll={selectedItems.length}
            onSelectAllItems={handleClickAllItems}
            columns={columns}
          />
          <DashTableBody
            query={searchQuery}
            passedData={doctorsData}
            isSelected={isSelected}
            onSelectItem={handleClickSelectedItem}
            columns={columns}
          />
        </Table>
      </TableContainer>
    </>
  )
}
export default DoctorDataTable
