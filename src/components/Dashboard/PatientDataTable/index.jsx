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

  // this will fire and activate all checkebox in one go if handleClickAllItems fires
  function isSelected(id) {
    return selected.indexOf(id) !== -1
  }

  function handleClickSelectedItem(e, id) {
    setSelected((prev) => [...prev, id])
    // const idx = selected.indexOf(id)
    // let newSelected = []
    // if (idx === -1) {
    //   setSelected(idx)
    // }
    console.log(selected)
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
