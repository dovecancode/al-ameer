import { Card, Table, TableContainer } from '@mui/material'
import { useState } from 'react'
import DashTableBody from '../DashTableBody'

import DashToolBar from '../DashToolBar'

import DashTableHead from '../../shared/DashTableHead'

import patientsData from './data'

const header = [
  'Patient ID',
  'Patient Name',
  'Gender',
  'Age',
  'Date of Birth',
  'Address',
  'Contact Number',
  'Disease',
  'Doctor Assigned',
  'Status',
  '',
]

function PatientDataTable() {
  const [patientQuery, setPatientQuery] = useState('')
  const [selected, setSelected] = useState([])

  function handleQuery(q) {
    setPatientQuery(q)
  }

  function handleClickAllItems(e) {
    if (e.target.checked) {
      const selectAll = patientsData.map((data) => data.patientID)
      setSelected(selectAll)
      return
    }
    setSelected([])
  }

  // this will fire and activate all checkbox in one go if handleClickAllItems fires
  function isSelected(id) {
    return selected.indexOf(id) !== -1
  }

  function handleClickSelectedItem(id) {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  return (
    <>
      <Card sx={{ width: '100%', mb: 2 }}>
        <DashToolBar
          selectedItems={selected}
          query={patientQuery}
          onQuery={handleQuery}
        />
        <TableContainer>
          <Table aria-label="simple table">
            <DashTableHead
              columnHeader={header}
              bgcolor="#159EEC"
              selectAll={selected.length}
              onSelectAllItems={handleClickAllItems}
            />
            <DashTableBody
              query={patientQuery}
              patientsData={patientsData}
              onSelectItem={handleClickSelectedItem}
              isSelected={isSelected}
            />
          </Table>
        </TableContainer>
      </Card>
    </>
  )
}

export default PatientDataTable
